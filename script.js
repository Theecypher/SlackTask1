const day = document.querySelector("#day"),
time = document.querySelector("#time");

const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
// const says= [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];

const d = new Date();
const Day = d.getDay();
let hours = d.getUTCHours();
let minute = d.getUTCMinutes();
let second = d.getUTCSeconds();
const Month = d.getUTCMonth();
const year = d.getUTCFullYear();
const millisecond = d.getUTCMilliseconds();


    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    second = second < 10 ? `0${second}` : `${second}`;

    let currentTime = `Current UTC Time: ${year}${Month}${hours}${minute}${second}${millisecond}`;

    time.innerHTML = currentTime;




