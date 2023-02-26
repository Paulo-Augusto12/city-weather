import { key } from "../api/apikey";
import axios from "axios";
async function getData(input: String) {
  const api = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${key}`;

  const response = await axios.get(api);

  console.log(response.data);
  return response.data;
}

export { getData };
