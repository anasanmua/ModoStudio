import { Card, Container } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

import './Weather.css'
import { useEffect } from 'react'

const Weather = ({ cityName }) => {

    const [weatherData, setWeatherData] = useState()


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=753bf7675696927d1daa601c92d681df&units=metric`)
            .then(data => setWeatherData(data.data))
            .catch(err => console.log(err))


    }, [])


    if (weatherData === undefined) {
        return (<h1>Loading</h1>)
    }
    return (
        <Container className='container'>
            <div className='divContainer'>
                <Card className='card' style={{ width: '18rem' }}>

                    <Card.Body className='cardBody'>

                        <Card.Title className="cardTitle">{weatherData.name}</Card.Title>
                        <Card.Text className='cardText'>
                            {weatherData.weather[0].description}
                        </Card.Text>
                        <div className='temperatureElements'>
                            <span>{weatherData.main.temp}ºC</span>
                            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
                        </div>
                        <div className='tempEleAdv'>
                            <span>H:{weatherData.main.temp_max}º | L:{weatherData.main.temp_min}º</span>
                            <span>Humidity: {weatherData.main.humidity}%</span>
                            <span>Wind: {weatherData.wind.speed} </span>
                        </div>

                    </Card.Body>
                </Card>
            </div>
        </Container>

    )

}

export default Weather