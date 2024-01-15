import { useState } from 'react';
function Weather(props) {
  const [city, setCity] = useState("Annecy");
  const url = "https://api.weatherapi.com/v1/current.json?key=72361dc0de984631970174354230208&q="+city;

  const [temperature, setTemperature] = useState(0);
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    setTemperature(data);
  });

  if(temperature){
    return (
      <div>
        <h1>Weather</h1>
        <h2>Il fait {temperature.current.temp_c}°C à {city}</h2>
      </div>
    );
  }else{
    return (
      <div>
        Chargement...
      </div>
    );
  }
  
}

export default Weather;