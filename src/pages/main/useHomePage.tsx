import React, { useState, useEffect } from "react";
import { IGeocatchingApiResponse } from "../../api/interfaces/geocatching";
import { IApiWeatherResponse } from "../../api/interfaces/weather";
import { getData } from "../../utils/getInputData";
import { getWeatherData } from "../../utils/getinputWeatherdata";

export function useHomePage() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState<IGeocatchingApiResponse[]>([]);
  const [cityWeatherData, setCityWeatherData] = useState<IApiWeatherResponse>();

  async function getAllData() {
    const response = await getData(city);
    setCityData(response);
  }

  useEffect(() => {
    async function getWeather() {
      const weatherResponse = await getWeatherData(
        cityData[0].lat,
        cityData[0].lon
      );
      setCityWeatherData(weatherResponse);
    }
    getWeather();
  }, [cityData]);

  return {
    city,
    setCity,
    cityData,
    cityWeatherData,
    getAllData,
  };
}
