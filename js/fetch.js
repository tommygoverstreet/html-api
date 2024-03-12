let hero = 'https://gist.githubusercontent.com/tommygoverstreet/38ff5f517ba3c499c89b9096d4258bf9/raw/b0c30ecc63191518c2e2d43acfd89d21abeef3b4/hero.html';
let navbar = 'https://gist.githubusercontent.com/tommygoverstreet/38ff5f517ba3c499c89b9096d4258bf9/raw/1abf1353053b43cd1f5045311fa19ac0abb7526c/navbar.html';
const intro = 'https://gist.githubusercontent.com/tommygoverstreet/38ff5f517ba3c499c89b9096d4258bf9/raw/748c9a221f29d647793a53124d4cefda9138b73b/jumbotron.html';
const album = 'https://gist.githubusercontent.com/tommygoverstreet/38ff5f517ba3c499c89b9096d4258bf9/raw/899cbb3366849f52fea408421378da4f10468937/album.html';

const app = document.getElementById('app');

const fetchHTML = (x) => {
 fetch(x)
 .then(response => response.text())
 .then(data => {
   app.innerHTML += data;
 });
};

fetchHTML(navbar);
fetchHTML(hero);
fetchHTML(intro);
fetchHTML(album);
// fetchHTML(footer);


