var currentDay = document.querySelector("#currentDay");
var container = document.querySelector(".container");

currentDay.textContent = moment().format("dddd, MMM Do");
