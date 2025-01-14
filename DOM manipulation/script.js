// -------------- DOM MANIPULATION --------------------
// console.log("helloo world")

// // document.getElementByid  is used to get the element of the specific id.
// let title = document.getElementById('title');

// // .innerText is used to get the  element of that specific tag in html 
// console.log(title.innerText)
// let message = "I love you aanchal❤️ and I missing you so much🥺"
// title.innerText = message
// console.log(title.innerText)

// // .innerHTML is used to get or set the HTML element of the specific id or class
// title.innerHTML = `<p>${message}</p>`

// // Changing the color of HTML element
// title.style.color = "red"
// title.style.backgroundColor = "black"


let redDiv = document.getElementById("red")
let yellowDiv = document.getElementById("yellow")
let greenDiv = document.getElementById("green")

// .onClick method is used to perform operations on clicking
redDiv.onclick = () => {
    console.log("user choose : Rock")
}
yellowDiv.onclick = () => {
    console.log("user choose : paper")
}
greenDiv.onclick = () => {
    console.log("user choose : scissor")
}

// querySelector is used to  get the element of specified class.
let squares = document.querySelectorAll(".squareBox")

// foreach loops
let timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(squares => {
    squares.onclick = () => {
        timesClicked[squares.value]++;
        squares.innerText = timesClicked[squares.value]
        // console.log(squares.value)
    }
});

// to clear the record
let clearBtn = () => {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square => {
        square.innerText = " "
    })
}
let clearGame = document.getElementById("clearGame")
console.log(clearGame.innerText)
clearGame.onclick = () => clearBtn();


// --------------------- addEventListener --------------------
let titleDiv = document.getElementById("title")
// titleDiv.onclick = () => console.log("hello")

// titleDiv.addEventListener('click',function(){
//     console.log("hi")
// })


document.addEventListener('keydown',function(e){
   if(e.key=="q"){
    console.log("YOU Pressed Q")
   }else{
    console.log("Not Q")
   }
})


// ---------------- Audio tags ---------------------------
document.addEventListener('keydown',function(e){
    if(e.key=="q"){
     console.log("YOU Pressed Q")
     document.getElementById("audio").play()
    }else{
     console.log("Not Q")
    }
 })