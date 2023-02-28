import axios from "axios";
import { VITE_APP_API_KEY } from "../api/apikey";

export async function getForecastWeatherData(lat: number, lon: number) {
  try {
    const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${VITE_APP_API_KEY}`;
    const response = await axios.get(baseURL);

    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("erro durante a requisição da previsão do tempo", err);
  }
}
