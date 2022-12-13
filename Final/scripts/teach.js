export function learn(content, Ltitle){
   //section element
   const learnSect = document.createElement("section");
   learnSect.className = "learn";
   document.body.appendChild(learnSect);

   //title element
   const title = document.createElement("h3");
   title.innerHTML = Ltitle;
   title.className = "learnTitle";
   learnSect.appendChild(title);

   //description element
   const desc = document.createElement("p");
   desc.innerHTML = content;
   desc.className = "desc";
   learnSect.appendChild(desc);
}