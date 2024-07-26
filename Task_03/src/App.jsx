import React, { useState } from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { getWeather } from "./api/weatherApi";
import WeatherResult from "./components/WeatherResult";

const App = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleGetWeather = async () => {
    setLoading(true);
    setError("");
    try {
      const weatherData = await getWeather(city);
      setWeather(weatherData);
    } catch (err) {
      setError("Error fetching weather data.");
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Weather App
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              label="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleGetWeather}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Get Weather"}
            </Button>
            {error && (
              <Typography color="error" align="center" mt={2}>
                {error}
              </Typography>
            )}
            {weather && <WeatherResult weather={weather} />}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default App;
