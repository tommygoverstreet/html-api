const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log.bind(console);
const s = 'http://localhost:5500';

const url = '/data/json/streetDev.json';

const get = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
}

const display = () => {
 get(url).then(data => {
  return data;
 })
}

const init = () => {
  display();
}

init();
   














