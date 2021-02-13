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