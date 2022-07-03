import React, {Component, useState} from "react";
import '../styles/App.css';

// Create a Multi-language news aggregator react app which also provides weather information based on the user's geolocation. Use the following APIs to fetch the news.
// - Weather info https://openweathermap.org/api.
// - News https://gnews.io
// Filter news by user's search query and their language

const api={keys:'5bfbc2a643558d104539b84c12dec86a',
base:"https://home.openweathermap.org/data/2.5"
}


const App = () => {
const[query,setQuery]=useState('')
const[weather,setWeather]=useState({})

const search=e=>{
  if(e.key==="Enter"){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.keys}`).then(res=>res.json()).then(result=>{
      setQuery('')
      setWeather(result)});
      console.log(weather)
  }
}

  const dates=()=>{
    let months=["January"," February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date=new Date()
    let d=date.getDate();
    let m=months[date.getMonth()]
    let y=date.getFullYear()
    return `${d} ${m} ${y}`
  }
  const day=()=>{
    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let d=new Date()
    let day=days[d.getDay()]
    return `${day}`
  }
  return (
    <div className="main">
      <div className="search-box">

<input className="int" placeholder="Enter city... " onChange={e=>setQuery(e.target.value)} value={query} onKeyPress={search}/>
      </div>
      {(typeof weather.main != "undefined")? (
      <div className="location-box weather-info">
        <div className="temp"></div>
        <div className="location">{weather.name}
        </div>
<div className="country">{weather.sys.counter}</div>
<div className="weater-type">smoke</div>
<div className="date">{dates()}</div>
<div className="day">{day()}</div>
      </div>
):('')}
    </div>
  )

  }

export default App;