import {nav} from './nav.js'
import {constellation} from './constellations.js'

nav();

const cdiv = document.createElement('div');
cdiv.className = "cdiv";
document.body.appendChild(cdiv);

const h2 = document.createElement('h2');
h2.textContent = 'Our Constellations';
h2.className = "cHeader";
cdiv.appendChild(h2);

const p = document.createElement('p');
p.textContent = 'Heart the constellations you\'ve seen in your night sky';
p.className = "cp";
cdiv.appendChild(p);

const requestURL = '../json/constellations.json';

const cards = document.createElement('div');
cards.className = 'cards'
document.body.appendChild(cards);


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const constellations = jsonObject['constellations'];
  


    constellations.forEach(
      stars => {
        let star = new constellation(stars);
        star.displayStars();
      });

      document.querySelectorAll('.love').addEventListener('click', alert('Help'));
 
  }); 


