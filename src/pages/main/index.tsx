import React from "react";
import { useHomePage } from "./useHomePage";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { TiWeatherSunny } from "react-icons/ti";
import { weatherIconData } from "../../api/iconData";
import { WeatherCard } from "../../components/weatherCard";
export function HomePage() {
  const hook = useHomePage();
  const icons = weatherIconData.map((data) => data.iconElement);
  const iconCode = weatherIconData.map((data) => data.iconCode);
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
            pt: 6,
          }}
        >
          <Typography variant="h6" sx={{ color: "#495057", fontWeight: 700 }}>
            Procure por informações do clima da cidade que quiser !
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
              height: hook.cityWeatherData?.weather.length ? "" : "80vh",
              width: "55%",
              backgroundColor: "#F8F9FA",
              borderRadius: "15px",
              padding: hook.cityWeatherData?.weather.length ? "2rem" : "",
            }}
          >
            <Box
              sx={{
                pt: "4rem",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                width: "90%",
              }}
            >
              <TextField
                sx={{
                  input: {
                    backgroundColor: "#DEE2E6",
                    color: "#495057",
                  },
                  width: "100%",
                  borderRadius: "6px",
                  height: "2vh",
                }}
                variant="outlined"
                value={hook.city}
                onChange={(e) => {
                  hook.setCity(e.target.value);
                }}
                label="Digite uma cidade"
              />
              <Button
                sx={{
                  backgroundColor: "#DEE2E6",
                  color: "#495057",
                  p: 2,
                }}
                onClick={async () => {
                  await hook.getAllData();
                  hook.setCity("");
                }}
              >
                <CiSearch size={24} />
              </Button>
            </Box>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: ".8rem",
                width: "100%",
              }}
            >
              {hook.cityData.length ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: ".8rem",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#495057" }}
                  >
                    {hook.cityData[0].state} - {hook.cityData[0].country}
                  </Typography>
                  {hook.cityWeatherData?.weather.length && (
                    <>
                      <div>
                        {hook.cityWeatherData.weather.map((weatherInfo) => {
                          const desired = iconCode.find(
                            (element) => weatherInfo.icon === element
                          );
                          return (
                            <div>
                              {weatherIconData.map(
                                (element) =>
                                  element.iconCode === desired &&
                                  element.iconElement
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <WeatherCard
                        cardDisplayData="Temperatura Atual"
                        cardReceivedData={hook.cityWeatherData.main.temp}
                        temp
                      />
                      <WeatherCard
                        cardDisplayData="Temperatura Mínima"
                        cardReceivedData={hook.cityWeatherData.main.temp_min}
                        temp
                      />
                      <WeatherCard
                        cardDisplayData="Temperatura Máxima"
                        cardReceivedData={hook.cityWeatherData.main.temp_max}
                        temp
                      />
                      <WeatherCard
                        cardDisplayData="Umidade do ar"
                        cardReceivedData={hook.cityWeatherData.main.humidity}
                        temp={false}
                      />
                    </>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
}
