const day = document.querySelector("#day"),
time = document.querySelector("#time");

const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

const d = new Date()
const Day = d.getDay();
const Month = months[d.getMonth()];
const year = d.getFullYear();
const hours = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();

// if ()

time.innerHTML = `${hours}:0${minute}:${second}`
day.innerHTML = `${Day}th ${Month} ${year}`


