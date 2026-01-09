export interface WeatherModel {
  name: string;
  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}