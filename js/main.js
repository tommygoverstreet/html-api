const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log.bind(console);

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
const currentHour = date.getHours();
const currentMinute = date.getMinutes();
const currentSecond = date.getSeconds();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = days[date.getDay()];
const month = months[date.getMonth()];
const today = `${day}, ${month} ${currentDay}, ${currentYear}`;
const time = `${currentHour}:${currentMinute}:${currentSecond}`;

const html = (el, content) => {
  el.innerHTML = content;
};

const text = (el, content) => {
  el.textContent = content;
};

const z = (x, y) => {
 if (x !== null && x !== undefined) {
  return y;
 }
}
 
const a = (x, y) => {
 if (x !== null && x !== undefined) {
  x.forEach(x => {
   html(x, y);
  });
 }
}

const tempX = (x, y) => {
 if (x.lenth == 1) {
  z($(x), html($(x), y));
 } else {
  a($$(x), y);
 }
}