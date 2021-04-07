const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=30.599&lon=-87.161&appid=5a4bdc9d092853fbb95e6de82c270d0c&units=imperial';
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      let temp = parseFloat(jsObject.current.temp);
      let speed = parseFloat(jsObject.wind.speed);
      document.getElementById('current_weather').innerHTML = " " + jsObject.weather[0].description;
      document.getElementById('temperature').innerHTML = Math.round(temp) + "&#8457;";
      if (temp <= 50 && speed >= 3) {
          var a = Math.pow(speed,.16);
          wind_chill = Math.round(35.74 + 0.6215 * temp -35.75* a + .4275 * temp * a);
          
      };
      
      document.getElementById('humidity').innerHTML = jsObject.current.humidity + "&#37;";
  
    });
    const forecastURL = 'https://api.openweathermap.org/data/2.5/weather?lat=30.599&lon=-87.161&appid=5a4bdc9d092853fbb95e6de82c270d0c&units=imperial';
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
          document.getElementById(`forecast0${day+1}`).textContent = Math.round(forecast[day].current.temp);
          document.getElementById(`icon0${day+1}`).setAttribute('src', imagesrc);
          document.getElementById(`icon0${day+1}`).setAttribute('alt', desc);
        }
      });
      const requestURL = "https://potterz7.github.io/wdd230/ChamberofCommerce/js/pacedata.json"


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const fishfilter = towns.filter(x => x.name == "Fish Haven");
    let fishEvents = fishfilter[0].events;
    let ul = document.createElement('ul'); 

    fishEvents.forEach(event => {
    let listItem = document.createElement('li');
    listItem.innerHTML = event;
    ul.append(listItem);
  }); 

  document.getElementById("events").appendChild(ul);
});