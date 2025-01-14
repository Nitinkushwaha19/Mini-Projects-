// Dog API
// https://dog.ceo/api/breeds/image/random

let image = document.getElementById("dogimg")
let buttons = () =>{
    fetch('https://dog.ceo/api/breeds/image/random').then(
        response => response.json() ).then(json => {
        console.log(json.message)
        image.innerHTML = `<img src="${json.message}" heigth=50px weight=50px/>`
    })
}

let buttonDiv = document.getElementById("button")
buttonDiv.onclick= () => buttons();
