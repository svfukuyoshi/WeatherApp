import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_CITY_KEY = 'lastCity';
const LAST_WEATHER_KEY = 'lastWeather';

export const CityStorage = {
  // City
  async getLastCity(): Promise<string | null> {
    return AsyncStorage.getItem(LAST_CITY_KEY);
  },

  async saveLastCity(city: string): Promise<void> {
    await AsyncStorage.setItem(LAST_CITY_KEY, city);
  },

  async clearLastCity(): Promise<void> {
    await AsyncStorage.removeItem(LAST_CITY_KEY);
  },

  // Weather
  async getLastWeather(): Promise<any | null> {
    const json = await AsyncStorage.getItem(LAST_WEATHER_KEY);
    return json ? JSON.parse(json) : null;
  },

  async saveLastWeather(weather: any): Promise<void> {
    await AsyncStorage.setItem(LAST_WEATHER_KEY, JSON.stringify(weather));
  },

  async clearLastWeather(): Promise<void> {
    await AsyncStorage.removeItem(LAST_WEATHER_KEY);
  },
};
