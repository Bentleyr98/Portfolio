import {createNasa, showImg} from './nasa.js'
import {nav} from './nav.js'
import {setupForm} from './form.js'
import {learn} from './teach.js'

nav();



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


    fetch('../json/whiteDrawf.json')
    .then(response => {
    return response.json();
    })
    .then((data) => {
    learn(data.content, data.title);
    console.log("LEARN");

    setupForm();
    document.querySelector('.nasaImg').addEventListener('click', showImg);

    });

   
})
.catch(error => {console.log(error);});
    

