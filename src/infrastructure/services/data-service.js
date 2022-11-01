import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

const axiosConfig = {
  baseURL,
};

const dataService = {
  login: (data) => {
    return axios.post("api/account/login", data, axiosConfig);
  },
  getWeatherForcast: () => {
    return axios.get("WeatherForecast", axiosConfig);
  },
};

export default dataService;
