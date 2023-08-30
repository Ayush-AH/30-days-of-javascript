const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthName= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
const today = new Date();

date.innerHTML = today.getDate();
day.innerHTML = dayNames[today.getDay()];
month.innerHTML = monthName[today.getMonth()];
year.innerHTML = today.getFullYear();