import { key } from "../api/apikey";
import axios from "axios";

interface IRequestProps {
  lat: Number;
  lon: Number;
  exclude?: String[];
}
async function getWeatherData(lat: number, lon: number) {
  try {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

    const response = await axios.get(api);

    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("Erro", err);
  }
}

export { getWeatherData };
