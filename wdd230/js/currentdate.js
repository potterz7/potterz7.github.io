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

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const currentdate = dayName + ", " + monthName + " " + d.getDate() +", " + d.getFullYear;
document.getElementById('currentdate').textcontent = currentdate;