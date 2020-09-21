import React from "react";
import "./App.css";
import WeatherEngine from "./components/weatherCard/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Ahvaz" />
      <WeatherEngine location="Delhi ,IN" />
      <WeatherEngine location="london" />
      <WeatherEngine location="arctic" />
      <WeatherEngine location="antarctica" />
    </div>
  );
}
export default App;
