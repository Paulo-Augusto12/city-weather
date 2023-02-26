import React, { useState, useEffect } from "react";
import { IGeocatchingApiResponse } from "../../api/interfaces/geocatching";
import { IApiWeatherResponse } from "../../api/interfaces/weather";
import { getData } from "../../utils/getInputData";
import { getWeatherData } from "../../utils/getinputWeatherdata";
import { getForecastWeatherData } from "../../utils/getInputWeatherForecast";
import { IForecastResponse } from "../../api/interfaces/forecast";

export function useHomePage() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState<IGeocatchingApiResponse[]>([]);
  const [cityWeatherData, setCityWeatherData] = useState<IApiWeatherResponse>();
  const [cityForecastData, setCityForecastData] = useState<IForecastResponse>();

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

  useEffect(() => {
    async function forecastData() {
      const forecastResponse = await getForecastWeatherData(
        cityData[0].lat,
        cityData[0].lon
      );
      setCityForecastData(forecastResponse);
    }
    forecastData();
  }, [cityData]);

  return {
    city,
    setCity,
    cityData,
    cityWeatherData,
    getAllData,
    cityForecastData
  };
}
