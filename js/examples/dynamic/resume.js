const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log.bind(console);
let html = '';

const resume = () => {
 let infoData = './resume.json';

 let data = null;

 function getJSON(url) { return fetch(url).then(response => response.json()); }

 const info = () => {
  getJSON(infoData).then(data => {
   $('#basicInfo').innerHTML = `
  <div class="info row a-center">
   <div class="avatar circle">
<img src="${data.image}" alt="avatar" class="circle">
   </div>
   <div class="name">
<h1>${data.fName} <span class="accent">${data.lName}</span></h1>
<h2>${data.job}</h2>
 </div>
  </div>`;
   $('#contactInfo').innerHTML = `<div class="card">
   <div class="card-header">
   <h2>Contact</h2>
   </div>
   <div class="card-body">
  <ul class="contact">
   </li><i class="fas fa-map-marker-alt accent"></i> ${data.address.city}, ${data.address.region}</li>
   <li><i class="fas fa-phone accent"></i> ${data.phone}</li>
   <li><i class="fas fa-envelope accent"></i> ${data.email}</li>
   </ul>
   </div>
   </div>
`;
   
   $('#aboutMe').innerHTML = `<div class="card">
   <div class="card-header">
   <h2>About Me</h2>
   </div>
   <div class="card-body">
   <p>${data.summary}</p>
   </div>
   </div>`;
  });
 
  getJSON(infoData).then(data => {
   $('#skills').innerHTML = `<div class="card">
   <div class="card-header">
   <h2>Skills</h2>
   </div>
   <div class="card-body">
   <ul class="skills">
   ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
   </ul>
   </div>
   </div>`;
  });

  // Experience
  
  getJSON(infoData).then(data => {
   $('#experience').innerHTML = `<div class="card">
   <div class="card-header">
   <h2>Experience</h2>
   </div>
   <div class="card-body">
   ${data.experience.map(exp => `<div class="row">
   <div class="left">
   <h3><i class="${exp.icon}"></i>${exp.position}</h3>
   <h4>${exp.name}</h4>
   <h5>${exp.startDate}</h5>
   <h5>${exp.endDate}</h5>
   </div>
   <div class="right">
   <p>${exp.summary}</p>
   </div>
   </div>`).join('')}
   </div>
   </div>`;
  });
  }
  info();
 }

 resume()
