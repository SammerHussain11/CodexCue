import React from "react";
import { Box, Typography } from "@mui/material";

const WeatherResult = ({ weather }) => {
  return (
    <Box mt={4} textAlign="center">
      <Typography variant="h5">
        {weather.name}, {weather.sys.country}
      </Typography>
      <Typography variant="h6">{weather.weather[0].description}</Typography>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="Weather Icon"
      />
      <Typography variant="h4">{weather.main.temp}°C</Typography>
      <Typography variant="body1">
        Humidity: {weather.main.humidity}%
      </Typography>
      <Typography variant="body1">
        Wind Speed: {weather.wind.speed} m/s
      </Typography>
    </Box>
  );
};

export default WeatherResult;
