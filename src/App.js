import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import UserGrid from './components/userGrid';
import UserDetail from './components/userDetail';
import './App.css';

function App() {
  const [data, setData] = useState();

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

		const updateHistory = (data) => {
			userHistory.push(data);
      // console.log(userHistory);
		};

    let sortedData = data && data.sort(function (a, b) {
      return a.name.first.localeCompare(b.name.first);
    });

    console.log("---DATA---");
    console.log(sortedData);


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
			<header>
				<h1>User Directory</h1>
			</header>
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
			</Routes>
			<footer>
				<p>Copyright Rob 2023, All Rights Reserved</p>
			</footer>
		</>
  );
}

export default App;
