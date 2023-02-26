export interface IApiWeatherResponse {
  coord: {
    lat: number;
    lon: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: string;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
}
