import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./component/Weather";

function App() {
  const [lat, setLat] = useState([]); //latitude
  const [long, setLong] = useState([]); //longitute
  const [data, setData] = useState([]); //weather Data
  let componentMounted = true;

  const fetchData = async () => {
    //First get the User Location
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log(lat);
      console.log(long);
    });
    //FETCH API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4b809fd25e1d1b379f82607f626a861a`
    );
    if (componentMounted) {
      setData(await response.json());
      // console.log(data);
    }
    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    fetchData();
  }, [lat, long]);

  return (
    <>
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>.....loading</div>
      )}
    </>
  );
}

export default App;
