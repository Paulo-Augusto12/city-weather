import { Box, Card, CardProps, Typography } from "@mui/material";
import React from "react";

interface ICardWeatherProps extends CardProps {
  cardDisplayData: string;
  cardReceivedData: number;
  temp?: boolean;
}
export function WeatherCard({
  cardDisplayData,
  cardReceivedData,
  temp,
}: ICardWeatherProps) {
  return (
    <Card sx={{ width: "80%", p: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent:  "space-between",
        }}
      >
        <Typography variant="h6" sx={{ color: "#495057" }}>
          {cardDisplayData}
        </Typography>
        <Typography variant="h6" sx={{ color: "#495057" }}>
          {cardReceivedData} {temp === true ? "°C" : "%"}
        </Typography>
      </Box>
    </Card>
  );
}
