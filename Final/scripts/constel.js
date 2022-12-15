import {nav} from './nav.js'
import {constellation} from './constellations.js'
import {ls} from './ls.js'

nav();

const cdiv = document.createElement('div');
cdiv.className = "cdiv";
document.body.appendChild(cdiv);

const h2 = document.createElement('h2');
h2.textContent = 'Our Constellations';
h2.className = "cHeader";
cdiv.appendChild(h2);

const p = document.createElement('p');
p.textContent = 'Select the heart to keep track of the constellations you\'ve seen in your night sky';
p.className = "cp";
cdiv.appendChild(p);

const requestURL = '../json/constellations.json';
let history = ls();

const cards = document.createElement('div');
cards.className = 'cards'
document.body.appendChild(cards);


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const constellations = jsonObject['constellations'];
    var starList = Array();
    var sName;
    var img;
    var fav;
    var love;

    
    constellations.forEach(
      stars => {
        // console.log(stars)
        const checkHistory = (history.some(oldstar => oldstar.name === stars.name) == true);
        if (checkHistory == false){
          // what to do if star isn't in ls
            sName = stars.name;
            img = stars.img;
            fav = '../images/preFav.png';
            love = false;
            var newStar = new constellation(sName, img, love, fav);
            newStar.displayStars();
            localStorage.setItem(newStar.name.split(" ").join(""), JSON.stringify(newStar));
            starList.push(newStar);

        } else if (checkHistory == true){
          //if star is in ls
          history.find(star => {
            if (star.name == stars.name){
              sName = star.name;
              img = star.img;
              fav = star.fav;
              love = star.love;
              const newStar = new constellation(sName, img, love, fav);
              newStar.displayStars();
              localStorage.setItem(newStar.name.split(" ").join(""), JSON.stringify(newStar));
              starList.push(newStar);
            }
          })
        }
      }
      );

      const favs = document.querySelectorAll('.love');
      favs.forEach(fav => {
        fav.addEventListener('click', function handleClick(event) {
              starList.find(obj => {
                if (obj.name.split(" ").join("") == fav.alt){
                  if (obj.love == false){
                    obj.love = true;
                  } else {
                    obj.love = false;
                  }
                  obj.favorite(fav.alt);
                  localStorage.setItem(obj.name.split(" ").join(""), JSON.stringify(obj));
                }
              }
          );
        });
      });
  }); 


