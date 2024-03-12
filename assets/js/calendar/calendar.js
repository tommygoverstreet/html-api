const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log.bind(console);

const calendar = () => {
 // $(".calendar") holds complete calendar using template literals
 const cal = $(".calendar");

 const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

 const date = new Date();
 let month = date.getMonth();
 let year = date.getFullYear();
 let day = date.getDay();
 let today = date.getDate();
 let firstDay = new Date(year, month, 1).getDay();
 let lastDay = new Date(year, month + 1, 0).getDate();
 let lastMonth = new Date(year, month, 0).getMonth();
 let lastYear = new Date(year, month, 0).getFullYear();
 let nextMonth = new Date(year, month + 1, 1).getMonth();
 let nextYear = new Date(year, month + 1, 1).getFullYear();
 let daysInMonth = new Date(year, month + 1, 0).getDate();
 let daysInLastMonth = new Date(year, month, 0).getDate();
 let daysInNextMonth = new Date(year, month + 2, 0).getDate();
 let daysInLastYear = new Date(year - 1, month, 0).getDate();
 let daysInNextYear = new Date(year + 1, month, 0).getDate();

 }

calendar();