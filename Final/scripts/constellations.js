export class constellation {

    constructor(Cname, img, love, favImg) {
        this.name = Cname;
        this.img = img;
        this.love = love;
        this.fav = favImg;
    }

    displayStars() {  
        // Create elements to add to the document
        let card = document.createElement('section');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let fav = document.createElement('img');
        fav.className = 'love';
        if (this.love == false){
            this.fav = '../images/preFav.png'
        } else {
           this.fav =  '../images/postFav.png'
        }
        fav.setAttribute('src', this.fav);
        fav.setAttribute('alt', this.name.split(" ").join(""));
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
        
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('div.cards').appendChild(card);
      }

      favorite(fav){
        let img = document.querySelector('img[alt=' + fav +']')
        if (this.love == true){
            this.fav = '../images/postFav.png'
            img.setAttribute('src', '../images/postFav.png');
            
        } else {
            this.fav = '../images/preFav.png';
            img.setAttribute('src', '../images/preFav.png');
        }
      }

}