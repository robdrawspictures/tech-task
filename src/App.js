import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import UserGrid from './components/userGrid';
import UserDetail from './components/userDetail';
import Header from './components/header';
// import './App.css';
import '../node_modules/@scottish-government/design-system/dist/css/design-system.css'
import UserHistoryDetail from './components/userHistoryDetail';
import Footer from './components/footer';

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

	let lastViewed;
	let userHistory = [];

	/* Handles updating of userHistory array (line 26), triggered in userDetail component.
	To prevent clutter, the list will reset every time it reaches 10 results. */
	const updateHistory = (data) => {
		if(userHistory.length === 10){
			userHistory.length = 0;
			userHistory.push(data);
		} else{
			userHistory.push(data);
		}
	};

	const setLastViewed = (data) => {
		console.log(data);
		lastViewed = data;
	} 

	console.log('LAST VIEWED: ' + lastViewed);

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
			<Header lastViewed={lastViewed}/>
			<div className="ds_page__middle">
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
								setLastViewed={setLastViewed}
							/>
						}
					/>
					<Route
						path="/user-history"
						element={
							<UserHistoryDetail
								users={sortedData}
								history={userHistory}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
			<div className="ds_back-to-top" data-module="ds-back-to-top">
				<a href="#top" className="ds_back-to-top__button">
					Back to top
					<svg
						className="ds_icon  ds_back-to-top__icon"
						aria-hidden="true"
						role="img"
					>
						<use></use>
					</svg>
				</a>
			</div>
		</>
  );
}

export default App;
