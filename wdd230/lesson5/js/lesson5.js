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

function fridayBanner() {
    const daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let d = new Date();
    let dayName = daynames[d.getDay()];

    const ban = document.querySelector('.movienightbanner');

    if (dayName = 5) {
      ban.style.display = 'block';
    } else {
      ban.style.display = 'none';
    };
};


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
};