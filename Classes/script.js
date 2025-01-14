// Classe 

// -------------- syntax --------
class car {
    constructor(name, color, TopSpeed) {
        this.name = name;
        this.color = color;
        this.TopSpeed = TopSpeed;
        this.CurrentSpeed = 0;
    }

    // creating  a method in the class
    drive() {
        // console.log("just drove the car for 2 kms ")
        this.CurrentSpeed += 10
        // console.log(`Driving speed at ${this.CurrentSpeed} MPH`)
    }

    zeroToSixty() {
        setTimeout(() => {
            console.log("Hurray! That was too fast.")
            this.CurrentSpeed = 60
            console.log(`Current speed of car : ${this.CurrentSpeed}`)
        })
    }

    brake() {
        setTimeout(() => {
            console.log("Slow Down!")
            this.CurrentSpeed -= 10
            console.log(`Current speed of car : ${this.CurrentSpeed}`)
        })
    }

    stop() {
        console.log("Stopped!")
        this.CurrentSpeed = 0;
        console.log(`Current speed of car : ${this.CurrentSpeed}`)
    }
}

// Creating an object of class car
const ferrari = new car("ferrari", "red", 250); // ferrari is the object of the class car
// console.log(ferrari)
// console.log(ferrari.name)

// console.log(ferrari.CurrentSpeed)

// // calling the method of class using the object  
//  ferrari.start();
//  ferrari.brake();

//  console.log(ferrari.CurrentSpeed)

// ferrari.zeroToSixty();
// const num = [1,2,3,4,5]
// num.forEach(()=>ferrari.drive())
// console.log(ferrari.CurrentSpeed)
// ferrari.stop();
// console.log(ferrari.CurrentSpeed)


// // ---------------- Array class method -------------
// Array.prototype.Mypush =
//     function (item) {
//         this[this.length] = item
//         return this
//     }

// Array.prototype.Mypop =
//     function () {
//         delete (this[this.length - 1])
//         this.length -= 1
//         return this
//     }

// const number = [1, 2, 3, 4, 5, 6]
// console.log(number)
// number.Mypop()
// number.Mypush(6)
// console.log(number)

// ---------------------- Exercise -----------------------
class Bank_accnt {
    constructor() {
        this.balance = 0;
    }
    deposit(deposit_amount) {
        // console.log('Deposit Amount : ',deposit_amount)
        this.balance += deposit_amount
        // console.log("balance: ",this.balance)
    }
    withdrawal(withdrawal_amount) {
        if (this.balance >= withdrawal_amount) {
            // console.log('Withdrawal Amount : ',this.balance)
             this.balance -= withdrawal_amount 
            //  console.log("balance: ",this.balance)
        }else{
            alert("Insufficient Balance")
        }
    }
    chck_balance() {
        return this.balance;
    }

}

const bank = new Bank_accnt();
// console.log("balance: "+bank.chck_balance())
// bank.deposit(500)
// console.log("balance: "+bank.chck_balance())
// bank.withdrawal(600)
// console.log("balance: "+bank.chck_balance())

const depositButton = document.getElementById("deposit")
const withdrawalButton = document.getElementById("withdrawal")
const amount = document.getElementById("amount")
const balanceDiv = document.getElementById("balance") 

depositButton.onclick = () =>{ 
 bank.deposit(Number(amount.value))
 balanceDiv.innerText = `Balance : ${bank.chck_balance()}` 
}
withdrawalButton.onclick = () => {
 bank.withdrawal(Number(amount.value))
 balanceDiv.innerText = `Balance : ${bank.chck_balance()}`
}
