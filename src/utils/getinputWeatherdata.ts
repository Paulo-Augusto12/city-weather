import { VITE_APP_API_KEY } from "../api/apikey";
import axios from "axios";

async function getWeatherData(lat: number, lon: number) {
  try {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_APP_API_KEY}&units=metric`;

    const response = await axios.get(api);
    return response.data;
  } catch (err) {
    console.log("Erro", err);
  }
}

export { getWeatherData };
