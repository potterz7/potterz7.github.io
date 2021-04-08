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



const finance = document.getElementById('freefinancialclass');
if (d.getDay() ==4) {
    finance.style.display = 'block'
}
    else {
        finance.style.display = 'none'
};

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
};


function thanks(){
    var thankyou = "https://potterz7.github.io/wdd230/ChamberOfCommerce/thankyou.html";
    window.location.href = thankyou;
};
function thankyou(){
    var thanks = "https://potterz7.github.io/wdd230/ChamberOfCommerce/comments.html";
    window.location.href = thanks;
};
function toggleView() {
    document.getElementById("gridandlist").classList.toggle("grid");
};