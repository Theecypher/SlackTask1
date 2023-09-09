const day = document.querySelector("#day"),
time = document.querySelector("#time");

function DisplayTime () {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                        "Thursday", "Friday", "Saturday" ]
    const d = new Date();
    const Day = daysOfWeek[d.getDay()];
    const times = d.getTime();

   day.innerHTML = `${Day}`;
    time.innerHTML = `${times}`;
}

setInterval(updateDayAndTime, 1000);



