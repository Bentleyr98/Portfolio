export function createNasa(image, expl, header){
            //section element
            const nasaSect = document.createElement("section");
            nasaSect.className = "nasa";
            document.body.appendChild(nasaSect);

            //title element
            const title = document.createElement("h3");
            title.innerHTML = header;
            title.className = "nasaTitle";
            nasaSect.appendChild(title);
    
            //img element
            const img = document.createElement("img");
            img.className = "nasaImg";
            img.src = image;
            nasaSect.appendChild(img);

    
            //description element
            const desc = document.createElement("p");
            desc.innerHTML = expl;
            desc.className = "nasaDesc";
            nasaSect.appendChild(desc);
}

export function showImg(){
    window.open("https://go-apod.herokuapp.com/image", "_blank");
}