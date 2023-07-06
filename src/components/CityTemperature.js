import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import '../App.css';
import { useLocation } from "react-router-dom";

function CityTemperature() {


  const apiKey = "a587724d9fc6a6b00f17935d1a6872d1"
  const [data, setData] = useState({})
  const location = useLocation();
  const cityName = location.state?.cityName;

  useEffect(() => {
    if (cityName) {
      getWetherDetails(cityName);
    }
  }, [cityName])


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

            <h5 className="weathorCity">
              {data?.name}
            </h5>
            <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
            <div className="weatherFooter">
              <div>
              <p>{data?.main?.humidity} - Humidity</p>
              </div>
              <div>
              <p>{data?.wind?.speed} km/h - Wind</p>
              </div>
              
              
            </div>
          </div>
          
        </div>
      }

    </div>
  );
}

export default CityTemperature;