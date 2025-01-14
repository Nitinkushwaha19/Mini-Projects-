// Asynchronous Programming
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve("✅ Your tea is ready") : reject("❌ Sorry! Tea is not available")
    }, 2000)
})

// async and await function is to simplify the concept of .then and .catch function
const getTea = async () => {
    const data = {
        ratings: null, tip:null, pay:null, review:null
    }
    
    try {
        const tea = await promise1
        console.log(tea)
        data.ratings = 5
        data.tip = 0.2
        data.pay = 50
        data.review = 5
        return data
    }
    catch (tea) {
        console.log(tea)
        data.ratings = 1
        data.tip = 0
        data.pay = 0
        data.review = 1
        return data
    }
}
1

// Alternate method to call getTea function
const getFunction = async () => {
    const getfunction = await getTea()
    console.log(getfunction)
}
getFunction();


// console.log(
//     promise1
//     .then(value => console.log(value)) // .then function work when promises is sucessfully done
//     .catch(value =>console.log(value))) // .catch() fucntion work when promises is reject due to any reason such as long time , unsufficient space ....etc


const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getDog()