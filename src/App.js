import { BrowseRouter as Router, Route, Link } from "react-router-dom"
import React, { useState } from 'react';
import Main from './components/Main'
import Home from './components/Home'
import SetLocation from './components/SetLocation'
import SetTempLocation from './components/SetTempLocation'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Weather from './components/Weather'

// Grab user for state and pass the user as props

function App() {

  // LEAVING OFF HERE
  // IDEA BRING OUT STATE FROM HOME AND USE IT AS STATE FOR APP.JS


  const [generalLocation, setGeneralLocation] = useState("London")
  const [data, setData] = useState("")
  function handleCallback(childData) {
    setData(childData)
    
  }
  console.log("app", data)
  return (
    <div>
      <Route path="/" exact>
        <Home loc={generalLocation} parentCallback ={handleCallback}/>
      </Route>
      <Route path="/:id/addLoc" exact component={SetLocation} />
      <Route path="/:id/tempLoc" exact component={SetTempLocation} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
      <Route path="/weather/:location"><Weather data={data}/></Route>
    </div>
  );
}

export default App;
