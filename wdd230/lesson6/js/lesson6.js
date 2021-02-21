const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let currentdate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();
document.getElementById('currentdate').textContent = currentdate;



const movie = document.getElementById('movienightbanner');
if (d.getDay() == 5) {
    movie.style.display = 'block'
}
    else {
        movie.style.display = 'none'
};


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
};

let temperature = 32;
document.getElementById('temperature').innerHTML = temperature;
let wind_speed = 5;
document.getElementById('windspeed').innerHTML= wind_speed;

var a = Math.pow(wind_speed,.16);
let wind_chill = 35.74 + 0.6215 * temperature -35.75* a + .4275 * temperature * a;
let wind_chill_result = Math.round(wind_chill*100)/100

document.getElementById('windchill').innerHTML = wind_chill_result;








