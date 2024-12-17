const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const newFinalTime = new Date("Jan 1, 2024 15:37:25").getTime();
const finalTime = new Date("Jan 1, 2024 15:37:25");
const expirationDay = document.querySelector('#expirationDay');
expirationDay.innerHTML = finalTime;

const updateClockContainerTime = () => {
    const currentTime = new Date().getTime();
    const time = newFinalTime - currentTime;

    const day = Math.floor(time / (1000 * 60 * 60 * 24));
    const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((time % (1000 * 60)) / 1000);
    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = minute < 10 ? '0' + minute : minute;
    seconds.innerHTML = second < 10 ? '0' + second : second;

    if(time < 0) {
        const expirationDay = document.querySelector('#expirationDay');
        clearInterval(updateClockContainerTime);
        expirationDay.innerHTML = "Expired"
    }
 }

setInterval(updateClockContainerTime, 1000);

