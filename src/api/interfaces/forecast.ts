export interface IForecastResponse {
  list: [
    {
      dayTime: string;
      main: {
        temp: string;
        
      };
      weather: {};
    }
  ];
}
