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



const movie = document.getElementById('freefinancialclass');
if (d.getDay() ==3) {
    movie.style.display = 'block'
}
    else {
        movie.style.display = 'none'
};

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
};

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function thanks(){
    var thankyou = "https://potterz7.github.io/wdd230/ChamberOfCommerce/thankyou.html";
    window.location.href = thankyou;
}




