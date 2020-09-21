import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import WeatherCard from "./weatherCard";

const WeatherEngine = ({ location }) => {
  //initializingfor the state variables

  const [query, setQuery] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  //definign the data fetching function
  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=687e7d211c2d5724459ac6860527abbb`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //this hook will make the code run only once the component is mounted and never again
  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
    <div style={{ color: "black" }}>
          Error !<button onClick={() => setError(false)}>Reset</button>
      </div>
    )
    }
  if (loading) {
    return (
    <div
          style={{
            display: "flex",
            width: "200px",
            height: "240px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PulseLoader size="15" color="purple" />
        </div>
  )
}
  return (//conditional rendering
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
            getWeather={getWeather}
          />
  );
};

export default WeatherEngine;
