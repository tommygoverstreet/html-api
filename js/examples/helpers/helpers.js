const helpers = () => {

 const $ = document.querySelector.bind(document);
 const $$ = document.querySelectorAll.bind(document);
 const log = console.log.bind(console);
 let html = '';
 let data = [];

 $('#logo').alt = 'logo';

 const toggle = (el, className) => {
  el.classList.toggle(className);
 };

 const toggleAll = (el, className) => {
  el.forEach((item) => {
   item.classList.toggle(className);
  });
 };

 const addClass = (el, className) => {
  el.classList.add(className);
 };

 const removeClass = (el, className) => {
  el.classList.remove(className);
 };

 const removeClassAll = (el, className) => {
  el.forEach((item) => {
   item.classList.remove(className);
  });
 };

 const th = (data) => {
  data.forEach((item) => {
   html += `<tr><th>${item}</th></tr>`;
  });
 }

 const td = (data) => {
  data.forEach((item) => {
   html += `<tr><td>${item}</td></tr>`;
  });
 }

 const list = (items) => {
  html = `<ul>`;
  items.forEach((item) => {
   html += `<li>${item}</li>`;
  });
  html += `</ul>`;
  return html;
 }

 const render = (el, html) => {
  el.innerHTML = html;
 };

 const renderAll = (el, html) => {
  el.forEach((item) => {
   item.innerHTML = html;
  });
 };

 const options = (data) => {
  html = '';
  data.forEach((item) => {
   html += `<option value="${item}">${item}</option>`;
  });
  return html;
 };

 const select = (options) => {
  html = `<select>`;
  html += options;
  html += `</select>`;
  return html;
 };

 const radio = (options) => {
  html = '';
  options.forEach((item) => {
   html += `<input type="radio" name="${item}" value="${item}">${item}<br>`;
  });
  return html;
 };

 const checkbox = (options) => {
  html = '';
  options.forEach((item) => {
   html += `<input type="checkbox" name="${item}" value="${item}">${item}<br>`;
  });
  return html;
 };

 const button = (type, text, action) => {
  html = `<button type="${type}" onclick="${action}" class="${type}">${text}</button>`;
  return html;
 };

 const img = (src, alt) => {
  html = `<img src="${src}" alt="${alt}">`;
  return html;
 };

 const link = (href, text) => {
  html = `<a href="${href}">${text}</a>`;
  return html;
 };

 const video = (src, type) => {
  html = `<video controls><source src="${src}" type="${type}"></video>`;
  return html;
 };

 const audio = (src, type) => {
  html = `<audio controls><source src="${src}" type="${type}"></audio>`;
  return html;
 }

 const icon = (name) => {
  html = `<i class="fa fa-${name}"></i>`;
  return html;
 };
 
}

helpers();





















