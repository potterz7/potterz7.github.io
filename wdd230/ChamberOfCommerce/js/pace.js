const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=30.599&lon=-87.161&appid=5a4bdc9d092853fbb95e6de82c270d0c&units=imperial';
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      let temp = parseFloat(jsObject.current.temp);
      document.getElementById('current_weather').innerHTML = " " + jsObject.current.weather[0].description;
      document.getElementById('temperature').innerHTML = Math.round(temp) + "&#8457;";
      document.getElementById('humidity').innerHTML = jsObject.current.humidity + "&#37;";
  
    });
    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=30.599&lon=-87.161&units=imperial&appid=5a4bdc9d092853fbb95e6de82c270d0c';
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let day = 0;
         day < forecast.length; day++) {
      const d = new Date(forecast[day].dt_txt);
      const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
      const desc = forecast[day].weather[0].description;
      document.getElementById(`day0${day+1}`).textContent = weekdays[d.getDay()];
      document.getElementById(`forecast0${day+1}`).textContent = Math.round(forecast[day].main.temp);
      document.getElementById(`icon0${day+1}`).setAttribute('src', imagesrc);
      document.getElementById(`icon0${day+1}`).setAttribute('alt', desc);
    }
  });
      
