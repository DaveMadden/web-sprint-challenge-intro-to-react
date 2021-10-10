import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chars from './components/Chars';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars, setChars] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        // console.log(res.data);
        setChars(res.data);
      }).catch(err =>{
        console.error(err);
      })
  }, []);

  if (!chars) return <h3>spooling up hyperdrives</h3>;

  return (
    <div className='App'>
      <Chars chars={chars}/>
    </div>
  )

}

export default App;
