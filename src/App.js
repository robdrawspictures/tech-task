import { useState, useEffect } from 'react';
import axios from 'axios';
import UserGrid from './components/userGrid';
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

  console.log('---DATA---')
  console.log(data);

  let sortedData = data.sort(function (a, b) {
		return a.name.first.localeCompare(b.name.first);
  });

  console.log(sortedData);


  if(!data){
    return (
      <h1>Now Loading...</h1>
    )
  }

  return (
    <div className="App">
      <UserGrid users={sortedData}/>
    </div>
  );
}

export default App;
