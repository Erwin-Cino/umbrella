import React, { useState, useEffect } from "react";
import axios from "axios";
import Summary from "./Summary";
import { responses } from "./responses";

const Weather = () => {
  const [url, setUrl] = useState("http://localhost:5000/weatherdata");
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setWeatherData(result.data);
    };
    fetchData();
  }, [url]);

  const citySelectHandler = event => {
    const cityId = event.target.value;
    if (cityId === 1) {
      setUrl("http://localhost:5000/weatherdata");
      console.log(cityId);
    }

    if (cityId === 2) {
      setUrl("http://localhost:5000/cainta");
      console.log(cityId);
    }
  };

  let content = <p>Loading...</p>;
  let forecast =
    weatherData &&
    weatherData.weather.map(items => {
      return Object.values(items.description).join("");
    });
  console.log(forecast && forecast.join(" "));
  //console.log(weatherData.name);
  if (
    (forecast && forecast.join(" ").includes("rain")) ||
    (forecast && forecast.join(" ").includes("drizzle")) ||
    (forecast && forecast.join(" ").includes("shower"))
  ) {
    content = (
      <>
        <Summary
          citySelect={citySelectHandler}
          umbrellaForecast={responses.true}
        ></Summary>
      </>
    );
  } else {
    content = (
      <Summary
        citySelect={citySelectHandler}
        umbrellaForecast={responses.false}
      ></Summary>
    );
  }

  return content;
};

export default Weather;
