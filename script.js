const day = document.querySelector("#day"),
time = document.querySelector("#time");

const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

const d = new Date()

function displayTime () {
    const d = new Date();
    let hours = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let period = 'AM';
    const Day = d.getDay();
    const Month = months[d.getMonth()];
    const year = d.getFullYear();

    if (hours > 12) {
        hours -= 12;
        period = "PM"
    }

    if (hours == 0) {
        hours = 12;
        period = "AM"
    }

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    second = second < 10 ? `0${second}` : `${second}`;

    let currentTime = `${hours} ${minute} ${second} ${period}`;
    day.innerHTML = `${Day}th ${Month} ${year}`

    time.innerHTML = currentTime;
}

setInterval(displayTime, 1000);




