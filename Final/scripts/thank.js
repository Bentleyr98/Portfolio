import {nav} from './nav.js'

nav();

   //section element
   const thankSect = document.createElement("section");
   thankSect.className = "thank";
   document.body.appendChild(thankSect);

   //title element
   const message = document.createElement("h4");
   message.textContent = "Thank you for your message, we'll get back to you shortly.";
   message.className = "learnTitle";
   thankSect.appendChild(message);


    

