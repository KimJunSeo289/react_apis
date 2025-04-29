import React from 'react'
import css from './WeatherPage.module.css'
import { useWeather } from './useWeatherApi'
import { useSearchParams } from 'react-router-dom'
import Button from './Button'

const WeatherPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const city = searchParams.get('city')

  const cityButtons = [
    { id: 'current', label: '현재위치' },
    { id: 'seoul', label: '서울' },
    { id: 'hongkong', label: '홍콩' },
    { id: 'tokyo', label: '도쿄' },
    { id: 'new york', label: '뉴욕' },
  ]
  const { data: weatherData, isLoading, isError } = useWeather(city)

  const handleChangeCity = city => {
    console.log('버튼 클릭', city)
    if (city === 'current') {
      setSearchParams({})
    } else {
      setSearchParams({ city })
    }
  }

  isLoading && <p>Loading</p>
  isError && <p>에러 발생</p>

  return (
    <main className={css.main}>
      <h2>WeatherPage</h2>
      <div className={css.weatherInfo}>
        <p className={css.location}>
          {weatherData?.sys.country} / {weatherData?.name}
        </p>
        <div className={css.temperature}>
          <p>{weatherData?.main.temp} &#8451;</p>
          <p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
              alt=""
            />
          </p>
        </div>
      </div>
      <div className={css.btnList}>
        {cityButtons.map(button => (
          <Button
            key={button.id}
            city={button.id}
            label={button.label}
            onClick={handleChangeCity}
          />
        ))}
      </div>
    </main>
  )
}

export default WeatherPage
