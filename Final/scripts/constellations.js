export class constellation {

    constructor(constellation) {
        this.name = constellation.name;
        this.img = constellation.img;
        this.love = false;
        this.fav = '../images/preFav.png';
        

    }

    displayStars() {  
        // Create elements to add to the document
        let card = document.createElement('section');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let fav = document.createElement('img');
        fav.className = 'love';
        fav.setAttribute('src', this.fav);
        fav.setAttribute('alt', 'Heart this constellation if you have spotted it in your sky.');
        img.setAttribute('src', this.img);
        img.setAttribute('alt', `${this.name}'s picture`);
        img.className = 'cImg';
        div.appendChild(fav);
        div.appendChild(img);
        card.appendChild(div);
    
        let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = this.name;
        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        // addStarListener();
        
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.cards').appendChild(card);
      }

      favorite(){
        if (this.love == false){
            this.fav = '../images/preFav.png';
        } else {
            this.fav = '../images/postFav.png'
        }
      }

      addStarListener() {
        // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
        // const childrenArray = Array.from(this.parentElement.children);
        // childrenArray.forEach(child => {
        //   this.img.addEventListener('clicked', e => {
        //     // why currentTarget instead of target?
        //     console.log(e.currentTarget.dataset.name);
        //     // this.love = true.
        //     // this.favorite(e.currentTarget.dataset.name);
        //   });
        // });
            this.fav.addEventListener('clicked', e => {
            // why currentTarget instead of target?
            console.log(e);
            // this.love = true.
            // this.favorite(e.currentTarget.dataset.name);
          });
      }

}


