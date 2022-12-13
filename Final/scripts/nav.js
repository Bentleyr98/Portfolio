export function nav() {
// header element
const header = document.createElement('header');
document.body.appendChild(header);

// h1 element
const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Celestial Skies'
header.appendChild(title);

//hr element
const line = document.createElement('hr');
header.appendChild(line);

// nav element
const nav = document.createElement('nav');
header.appendChild(nav);

// ul element
const ul = document.createElement('ul');
nav.appendChild(ul);

// a/li elements
const a1 = document.createElement('a');
a1.href = 'index.html'
const li1 = document.createElement('li');
li1.textContent = 'Home';
a1.appendChild(li1);
ul.appendChild(a1);

const a2 = document.createElement('a');
a2.href = 'constellations.html'
const li2 = document.createElement('li');
li2.textContent = 'Constellations';
a2.appendChild(li2);
ul.appendChild(a2);
}