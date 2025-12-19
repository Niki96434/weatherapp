import { useState, useEffect } from 'react'
import Form from './components/Form'
import Result from './components/Result'
import './App.css'
export default function App() {
  const [watchRes, setWatchRes] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [res, setRes] = useState(null)
  const [error, setError] = useState(false)
  // const [msgErr, setMsgErr] = useState('')
 
  const data = async function(cityname) {
    let cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c839eee5c6bd1761df4928d6d5b73371&lang=ru&units=metric`)
    let resp = await cityResponse.json()
    setRes(resp)
  }
  function onClickSearch(event) {
    event.preventDefault()
    setWatchRes(true)
    if (inputValue !== '' || inputValue!==undefined) {
      data(inputValue)
      // setMsgErr('')
    } else {
      setError(true)
    }
}
  return (
    <>
      <div className='center'>
        <h2>Weather app</h2>
        <Form getData={(e) => setInputValue(e.target.value)} onClickSearch={onClickSearch} />
        <div className='res'>
        {watchRes && res && <Result city={res.name} temp={res.main.temp} weather={res.weather[0].description} max_temp={res.main.temp_max} min_temp={res.main.temp_min} feels_like={res.main.feels_like}/> || watchRes && error && <p>Введите город</p>}
        </div>
      </div>  
    </>
    // temp={res.main} weather={res.weather[0]} max_temp={res.main.temp_max} min_temp={res.main.temp_min} feels_like={res.main.feels_like}/>}
  )
}

