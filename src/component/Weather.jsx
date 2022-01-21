import React from "react";

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload();
  };
  //Temp shown in Kelvin, convert into Celcius
  let temp = (weatherData.main.temp - 273.15).toFixed(2);
  let mintemp = (weatherData.main.temp_min - 273.15).toFixed(2);
  let maxtemp = (weatherData.main.temp_max - 273.15).toFixed(2);
  //Dynamic Data
  let d = new Date();
  let date = d.getDate();
  let year = d.getFullYear();
  let month = d.toLocaleString("default", { month: "long" });
  let day = d.toLocaleString("default", { weekday: "long" });

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-conent-center">
          <div className="col-xsm-4">
            <div class="card text-white bg-black mb-3 shadow-lg text-center">
              <div class="card-header">
                Dylan's Weather App
                <i
                  className="fa fa-refresh float-end pt-1"
                  onClick={refresh}
                ></i>
              </div>
              <div class="card-body py-5">
                <h2 class="card-title mb-0">{weatherData.name}</h2>
                <p class="card-text lead mb-5">
                  {day}, {month} {date}, {year}
                  <hr />
                </p>
                <hr />
                <h1 className="display-5 fw-bold mb-5">{temp} &deg;C </h1>
                <hr />
                <p className="type fw-bold mb-0">
                  {weatherData.weather[0].main}
                </p>
                <p className="maxmin">
                  {mintemp} &deg;C | {maxtemp} &deg;C
                </p>
                <p className="humidity">
                  Humidity: {weatherData.main.humidity}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
