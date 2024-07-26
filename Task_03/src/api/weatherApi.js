import axios from "axios";

const API_KEY = "aca5e809169183fbb15438d96aa0cb1c";

export const getWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
