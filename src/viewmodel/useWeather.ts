import { useEffect, useState } from 'react';
import { WeatherModel } from '../model/Weather';
import { getWeatherByCity } from '../api/weather';
import { ApiError, ApiErrorType } from '../api/apiError';
import { isOnline } from '../utils/network';
import { CityStorage } from '../storage/city';

export const useWeatherViewModel = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherModel | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  (async () => {
    const savedCity = await CityStorage.getLastCity();
    const savedWeather = await CityStorage.getLastWeather();

    if (savedCity) setCity(savedCity);
    if (savedWeather) setWeather(savedWeather);
  })();
}, []);

  const searchWeather = async () => {
    if (!(await isOnline())) {
      setError('No internet connection');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherByCity(city);
      setWeather(data);
      await CityStorage.saveLastCity(city);
      await CityStorage.saveLastWeather(data);
    } catch (err) {
      if (err instanceof ApiError) {
        switch (err.type) {
          case ApiErrorType.TIMEOUT:
            setError('Request timed out. Please try again.');
            break;
          case ApiErrorType.NETWORK:
            setError('Network error. Check your connection.');
            break;
          case ApiErrorType.NOT_FOUND:
            setError('City not found.');
            break;
          default:
            setError('Unexpected error occurred.');
        }
      } else {
        setError('Unexpected error occurred.');
      }

      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    city,
    setCity,
    weather,
    setWeather,
    loading,
    error,
    searchWeather,
  };
};
