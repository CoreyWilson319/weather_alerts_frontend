import { BrowseRouter as Router, Route, Link } from "react-router-dom"
import React, { useState } from 'react';
import Main from './components/Main'
import Home from './components/Home'
import SetLocation from './components/SetLocation'
import SetTempLocation from './components/SetTempLocation'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'

// Grab user for state and pass the user as props

function App() {
  const [generalLocation, setGeneralLocation] = useState("London")
  console.log(generalLocation)
  return (
    <div>
      <Route path="/" exact>
        <Home loc={generalLocation}/>
      </Route>
      <Route path="/:id/addLoc" exact component={SetLocation} />
      <Route path="/:id/tempLoc" exact component={SetTempLocation} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
    </div>
  );
}

export default App;
