

class Tamagotchi {
    constructor() {
        this.name = ""
        this.age = 0
        this.hunger = 20
        this.tired = 20
        // i want to make this.mood reference an array of moods and display that instead of a number
        this.mood = 0
        // only 6 items in this array
        this.moodArray = ["i'm fine", "ok","happy", "mad", "dead","you should check on your Tamagotchi!!"]
        this.health = 100
        //empty string for now till i know what i want
        this.evoltion=0
        this.evoltionPhases=["egg","baby","adult"]
        this.gameStart=false
    }
    
    //need a math function that decreaes heath baised on abouve factors 
    eat() {
        this.hunger++
        if (this.health < 100) {
            this.health += 5
            this.hunger++
        }
        console.log(austin.health)
        display()
    }
    play() {
        // this.mood can not drop below 0 or go above 7
        console.log("play")
        // this.mood+=1
        if(this.mood === 2) {
            this.mood = 5
        } else if (this.mood <= 5 && this.mood > 0) {
            this.mood--
        }
        
        display()
    }
    sleep() {
        this.tired++
        if (this.health < 100) {
            this.health += 10
        }
        display()
       
    }
    evolve(){
        this.evoltion++
    }
}
if(austin.age>2){
    // evolve pet 

}
// const textBox= document.getElementById("text-box")
// console.log(textBox)
// const name1= document.createElement("h1")
// document.body.appendChild(name1)
// name1.appendChild(textBox)
const austin = new Tamagotchi()

const display=()=>{
    const health= document.getElementById("health")
    const mood= document.getElementById("mood")
    const tired=document.getElementById("tired")
    const hunger= document.getElementById("hunger")
    const age= document.getElementById("age")

    health.innerText=`health ${austin.health}`
    mood.innerText=`mood ${austin.moodArray[austin.mood]}`
    tired.innerText= `tired ${austin.tired}`
    hunger.innerText= `hunger ${austin.hunger}`
    age.innerText= `age ${austin.age}`
}
display()
const checkWinOrLose=()=>{
    if (austin.health<=0){
        alert("game over")
        clearInterval()
        clearInterval()
        return
    }
    if(austin.age>=7){
        alert("you win")
        clearInterval()
        clearInterval()
        return
    }
    
}
const interval = () => {
    austin.health -= 5
    austin.hunger--
    austin.tired--
    display()
    checkWinOrLose()
}
const intervalAge = () => {
    austin.age++
    display()
    
}

const startButton = () => {
    setInterval(interval, 3000)
    setInterval(intervalAge, 10000)
    austin.gameStart=true
}

const gameStart=document.getElementById("start")
gameStart.addEventListener("click",startButton)
const eatButton= document.getElementById("eat")
eatButton.addEventListener("click",()=>{austin.eat()})
const sleepButton = document.getElementById("sleep")
sleepButton.addEventListener("click",()=>{austin.sleep()})
const playButton= document.getElementById("play")
playButton.addEventListener("click",()=>{austin.play()})

