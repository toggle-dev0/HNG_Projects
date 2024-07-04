var timeEl = document.querySelector("#time");
var dayEl = document.querySelector("#day");
let daysOfTheWeek = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"};
function clockWork() {
    let currentTime = new Date();
    timeEl.textContent = currentTime.toUTCString();
    dayEl.textContent = daysOfTheWeek[currentTime.getDay()];
}
setInterval(clockWork, 1000);