import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import React, { Link } from "react-router-dom";
import axios from "axios";
require('dotenv').config()

function Home(props) {
    console.log(props)
  function generalWeatherHandler(props) {
    let loc = props.loc
    axios.get('http://api.weatherapi.com/v1/current.json?key=' + process.env.REACT_APP_API_KEY + '&q=' + loc) // Change London to whatever the users location is based on location in user data
    .then((response) => {
        console.log(response.data)
    })
  }
  generalWeatherHandler()
  return (
    <div>
      <div>NavBar</div>
      <h1>Home</h1>
      {/* if Not signed in show login/register */}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      {/* If signed in show only logout */}
      <Link to="/logout">Logout</Link>
      {/* Grab location data from browser, use that information from location to show local weather */}
    </div>
  );
}

export default Home;
