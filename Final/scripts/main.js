const url = "https://go-apod.herokuapp.com/apod"
const backupImage = "../images/bu.png"
const backupDesc = "This whole collection is NGC 1858, an open star cluster in the northwest region of the Large Magellanic Cloud, a satellite galaxy of our Milky Way that boasts an abundance of star-forming regions. NGC 1858 is estimated to be around 10 million years old."
const backupTitle = "Hubble Spies Emission Nebula-Star Cluster Duo"

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    if (data.media_type == "image"){
        createNasa(data.url, data.explanation, data.title);
        console.log("Image");
    } else {
        createNasa(backupImage, backupDesc, backupTitle);
        console.log("Video");
    }
})
.catch(error => {console.log(error);});


function createNasa(image, expl, header){
            //section element
            const nasaSect = document.createElement("section");
            nasaSect.className = "nasa";
            document.body.appendChild(nasaSect);

            console.log(nasaSect.className);
            console.log("nasaSection was created");

            //title element
            const title = document.createElement("h3");
            title.innerHTML = header;
            title.className = "nasaTitle";
            nasaSect.appendChild(title);

            console.log(title.className);
            console.log("Title was set and created");
    
            //img element
            const img = document.createElement("img");
            img.className = "nasaImg";
            img.src = image;
            nasaSect.appendChild(img);

            console.log(img.className);
            console.log("Image was set and created");

    
            //description element
            const desc = document.createElement("p");
            desc.innerHTML = expl;
            desc.className = "nasaDesc";
            nasaSect.appendChild(desc);

            console.log(desc.className);
            console.log("Description was set and created");
}