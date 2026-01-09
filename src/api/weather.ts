import { axiosInstance } from './axiosInstance';
import { WeatherModel } from '../model/Weather';
import Config from '../../config';


export const getWeatherByCity = async (city: string): Promise<WeatherModel> => {
  const response = await axiosInstance.get<WeatherModel>('/weather', {
    params: { q: city, units: 'metric' },
  });
  return response.data;
};
