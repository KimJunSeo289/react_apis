import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=51779bb4b68d1ab4d12498007432bd63`

// 좌표로 날씨정보 가져오기
export const getWeatherByCurrentLocation = async (lat, lon) => {
  try {
    const res = await axios.get(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`
    )
    return res.data
  } catch (err) {
    console.log('좌표로 날씨정보 가져오기 실패', err)
  }
}

// 현재 위치 날씨 정보 가져오기
export const getCurrentData = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          const { latitude, longitude } = position.coords
          const res = await getWeatherByCurrentLocation(latitude, longitude)
          resolve(res)
        } catch (err) {
          console.log('좌표로 날씨정보 가져오기 실패', err)
          reject(err)
        }
      },
      err => {
        console.log('좌표 가져오기 실패', err)
      }
    )
  })
}

// 특정 좌표 위치 가져오기
export const getCountryData = async city => {
  try {
    const res = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&lang=kr&units=metric`)
    return res.data
  } catch (err) {
    console.log('좌표로 날씨정보 가져오기 실패', err)
  }
}

export const useWeather = city => {
  console.log('날씨 데이터:', city)
  return useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      try {
        const data = city ? await getCountryData(city) : await getCurrentData()
        return data
      } catch (error) {
        console.log('에러발생', error)
      }
    },
    staleTime: 1000 * 3,
    retry: 1,
  })
}
