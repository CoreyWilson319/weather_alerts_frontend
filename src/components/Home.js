import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import React, { useEffect, useState } from 'react';
import Weather from './Weather'
import { Link } from "react-router-dom";
import axios from "axios";
require('dotenv').config()

function Home(props) {

    const [condition, setCondition] = useState("")
    const [feelsLike, setFeelsLike] = useState("")
    const [wind, setWind] = useState("")
    const [gust, setGust] = useState("")
    const [windDirection, setWindDirection] = useState("")
    const [humidity, setHumidity] = useState("")
    const [precipitation, setPrecipitation] = useState("")
    const [temperature, setTemperature] = useState("")
    const [locationName, setLocationName] = useState("")
    const [locationRegion, setLocationRegion] = useState("")
    const [country, setCountry] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [visibility, setVisibility] = useState("")

    

        function generalWeatherHandler(props) {
          let loc = props.loc
          axios.get('http://api.weatherapi.com/v1/current.json?key=' + process.env.REACT_APP_API_KEY + '&q=' + loc) // Change London to whatever the users location is based on location in user data
          .then((response) => {
              let res = response.data.current
              console.log(response.data)
              setCondition(res.condition.text)
              setFeelsLike(res.feelslike_f)
              setWind(res.wind_mph)
              setWindDirection(res.wind_dir)
              setGust(res.gust_mph)
              setHumidity(res.humidity)
              setPrecipitation(res.precip_in)
              setTemperature(res.temp_f)
              setVisibility(res.vis_miles)
              res = response.data.location
              setLocationName(res.name)
              setCountry(res.country)
              setLocationRegion(res.region)
              setLatitude(res.lat)
              setLongitude(res.lon)
          })
        }
        
        generalWeatherHandler(props)

  return (
    <div>
      <div>NavBar</div>
      <h1>Home</h1>
      {/* if Not signed in show login/register */}
      <Link to="/login">Login</Link>|
      <Link to="/register">Register</Link>|
      {/* If signed in show only logout */}
      <Link to="/logout">Logout</Link>
      <h1>Content</h1>
      <h1>Current Weather</h1>
      <p>Location: {locationRegion}</p>
      <ul>
          <li>Current Conditions: {condition}</li>
          <li>Temperature in F: {temperature}</li>
          <li>Precipitation: {precipitation}</li>
          <li>Humidity: {humidity}</li>
          <li>Wind: {wind}</li>
      </ul>
      {/* Grab location data from browser, use that information from location to show local weather */}
      {/* Maybe just have basic information on the home page,  */}
      {/* Pass state as props to a more indepth component page */}
    </div>
  );
}

export default Home;
