const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1b371f42c315d47c2f8e62ae20f6c89f'
const temperature = 273.15 * 9/5 + 32
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = ((jsObject.main.temp-273.15) * 9/5 + 32).toFixed(2);

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;  
document.getElementById('imagesrc').textContent = imagesrc; 
document.getElementById('icon').setAttribute('src', imagesrc);
document.getElementById('icon').setAttribute('alt', desc);
  });


