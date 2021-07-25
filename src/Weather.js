import React from "react";
import "./Weather.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}℃`
    );
  }

  let apiKey = "b44c44391c0349160ac683c7b746d72d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey} `;

  axios.get(apiUrl).then(handleResponse);

  return <Loader type="BallTriangle" color="#000" height={80} width={80} />;
}
