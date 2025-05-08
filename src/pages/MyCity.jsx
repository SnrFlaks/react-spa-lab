import React, { useEffect, useState } from "react";

export default function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://wttr.in/Kyiv?format=j1")
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          condition: data.current_condition[0].weatherDesc[0].value,
          temp_c: data.current_condition[0].temp_C,
          name: data.nearest_area[0].areaName[0].value,
          country: data.nearest_area[0].country[0].value,
        });
      });
  }, []);

  return (
    <div className="section">
      <h1>Моє місто — Київ</h1>
      <p>Київ — столиця України з багатою історією та культурною спадщиною.</p>
      {weather && (
        <div>
          <p>Погода: {weather.condition}</p>
          <p>Температура: {weather.temp_c}°C</p>
          <p>
            Місто: {weather.name}, {weather.country}
          </p>
        </div>
      )}
    </div>
  );
}
