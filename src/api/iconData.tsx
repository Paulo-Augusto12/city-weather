import {
  TiWeatherSunny,
  TiWeatherPartlySunny,
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherDownpour,
} from "react-icons/ti";
import { WiNightThunderstorm } from "react-icons/wi";
import { BsSnow } from "react-icons/bs";
import { TbMist } from "react-icons/tb";

export const weatherIconData = [
  {
    description: "sunny",
    iconCode: "01d",
    iconElement: <TiWeatherSunny size={150} color={"#495057"} />,
  },
  {
    description: "partialy-suny",
    iconCode: "02d",
    iconElement: <TiWeatherPartlySunny size={150} color={"#495057"} />,
  },
  {
    description: "cloudy",
    iconCode: "03d",
    iconElement: <TiWeatherCloudy size={150} color={"#495057"} />,
  },
  {
    description: "rainy",
    iconCode: "04d",
    iconElement: <TiWeatherShower size={150} color={"#495057"} />,
  },
  {
    description: "mid-rainy",
    iconCode: "09d",
    iconElement: <TiWeatherDownpour size={150} color={"#495057"} />,
  },
  {
    iconCode: "10d",
    iconElement: <TiWeatherDownpour size={150} color={"#495057"} />,
  },
  {
    description: "very-rainy",
    iconCode: "11d",
    iconElement: <WiNightThunderstorm size={150} color={"#495057"} />,
  },
  {
    description: "snow",
    iconCode: "13d",
    iconElement: <BsSnow size={150} color={"#495057"} />,
  },
  {
    description: "mist",
    iconCode: "50d",
    iconElement: <TbMist size={150} color={"#495057"} />,
  },

  {
    description: "sunny",
    iconCode: "01n",
    iconElement: <TiWeatherSunny size={150} color={"#495057"} />,
  },
  {
    description: "partialy-suny",
    iconCode: "02n",
    iconElement: <TiWeatherPartlySunny size={150} color={"#495057"} />,
  },
  {
    description: "cloudy",
    iconCode: "03n",
    iconElement: <TiWeatherCloudy size={150} color={"#495057"} />,
  },
  {
    description: "rainy",
    iconCode: "04n",
    iconElement: <TiWeatherShower size={150} color={"#495057"} />,
  },
  {
    description: "mid-rainy",
    iconCode: "09n",
    iconElement: <TiWeatherDownpour size={150} color={"#495057"} />,
  },
  {
    iconCode: "10n",
    iconElement: <TiWeatherDownpour size={150} color={"#495057"} />,
  },
  {
    description: "very-rainy",
    iconCode: "11n",
    iconElement: <WiNightThunderstorm size={150} color={"#495057"} />,
  },
  {
    description: "snow",
    iconCode: "13n",
    iconElement: <BsSnow size={150} color={"#495057"} />,
  },
  {
    description: "mist",
    iconCode: "50n",
    iconElement: <TbMist size={150} color={"#495057"} />,
  },
];
