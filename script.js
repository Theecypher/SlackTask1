const day = document.querySelector("#day"),
time = document.querySelector("#time");

    const d = new Date();
    const Day = d.getDay();
const times = d.getTime();
//let hours = d.getUTCHours();
//let minute = d.getUTCMinutes();
//let second = d.getUTCSeconds();
   // const month = d.getUTCMonth();
    //const year = d.getUTCFullYear();
//const millisecond = d.getUTCMilliseconds();

    //hours = hours < 10 ? `0${hours}` : `${hours}`;
    //minute = minute < 10 ? `0${minute}` : `${minute}`;
    //second = second < 10 ? `0${second}` : `${second}`;

    //let currentTime = `Current UTC Time: ${year}${month}${hours}${minute}${second}${millisecond}`;
    day.innerHTML = "Thursday";

    time.innerHTML = `${times}`;




