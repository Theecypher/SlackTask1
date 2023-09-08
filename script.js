const day = document.querySelector("#day"),
time = document.querySelector("#time");

const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

const d = new Date()

function displayTime () {
    const d = new Date();
    const day = d.getUTCDate();
const hours = d.getUTCHours();
const minute = d.getUTCMinutes();
const second = d.getUTCSeconds();
    const Month = months[d.getMonth()];
    const year = d.getFullYear();


    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    second = second < 10 ? `0${second}` : `${second}`;

    let currentTime = `${hours} ${minute} ${second}`;
    day.innerHTML = `${Day}th ${Month} ${year}`

    time.innerHTML = currentTime;
}

setInterval(displayTime, 1000);




