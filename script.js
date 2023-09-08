const day = document.querySelector("#day"),
time = document.querySelector("#time");

const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

function displayTime () {
    const d = new Date();
    const Day = d.getDay();
let hours = d.getUTCHours();
let minute = d.getUTCMinutes();
let second = d.getUTCSeconds();
    const Month = months[d.getMonth()];
    const year = d.getFullYear();

    // if (hours > 12) {
    //     hours -= 12;
    //     period = "PM"
    // }

    // if (hours == 0) {
    //     hours = 12;
    //     period = "AM"
    // }

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    second = second < 10 ? `0${second}` : `${second}`;

    let currentTime = `${hours} ${minute} ${second}`;
    day.innerHTML = `${Day}th ${Month} ${year}`

    time.innerHTML = currentTime;
}

setInterval(displayTime, 1000);




