url = "https://go-apod.herokuapp.com/apod"

fetch(url)
    .then(response => {
        console.log(response.json());
        let image = response;
        console.log(image.url);
        document.getElementById("myImg").src = image.url;
        
    })
    .catch(error => {
        // handle the error
        console.log(error);
    });