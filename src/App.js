import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import UserGrid from './components/userGrid';
import UserDetail from './components/userDetail';
import Header from './components/header';
// import './App.css';
import '../node_modules/@scottish-government/design-system/dist/css/design-system.css'
import UserHistory from './components/userHistory';

function App() {
  const [data, setData] = useState();

  /* On load, triggers API call to fetch data for app */
  useEffect(() => {
    const fetchUsers = async () => {
      try {
          let res = await axios.get('https://randomuser.me/api/?results=10&nat=gb');
          let json = res.data.results
          setData(json);
        }
      catch(err) {
            console.log(err)
        }
      }
      fetchUsers();
    }, []);

    let userHistory = [];

    /* Handles updating of userHistory array (line 26), triggered in */
		const updateHistory = (data) => {
			userHistory.push(data);
		};

    let sortedData = data && data.sort(function (a, b) {
      return a.name.first.localeCompare(b.name.first);
    });

    if(!data){
      return (
      <>
        <div className="loading-container">
          <h1>Now Loading...</h1>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
    }

  return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<UserGrid
							users={sortedData}
							userHistory={userHistory}
						/>
					}
				/>
				<Route
					path="/users/:id"
					element={
						<UserDetail
							users={sortedData}
							updateHistory={updateHistory}
						/>
					}
				/>
				<Route
					path="/user-history"
					element={
						<UserHistory
							users={sortedData}
							updateHistory={updateHistory}
						/>
					}
				/>
			</Routes>
			<footer>
				<p>Copyright Rob 2023, All Rights Reserved</p>
			</footer>
		</>
  );
}

export default App;
