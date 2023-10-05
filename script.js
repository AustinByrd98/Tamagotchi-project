

class Tamagotchi {
    constructor() {
        this.name = ""
        this.age = 0
        this.hunger = 10
        this.tired = 10
        // i want to make this.mood reference an array of moods and display that instead of a number
        this.mood = 5
        // only 6 items in this array
        this.moodArray = [ "dead", "you should check on your Tamagotchi!!", "mad","i'm fine", "ok","happy"]
        this.health = 100
        //empty string for now till i know what i want
        this.evoltion=0
        this.evoltionPhases=["egg","baby","adult","old man"]
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
        if(this.mood === 5) {
            this.mood = 2
        } else if (this.mood <= 5 && this.mood > 0) {
            this.mood++
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
        if(this.age===1){
            this.evoltion++
        }
        if (this.age===3){
            this.evoltion++
        }
        if (this.age===5){
            this.evoltion++
        }
        
        display()
    }
}
// 
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
    const evolve=document.getElementById("evolution")

    health.innerText=`health ${austin.health}`
    mood.innerText=`mood ${austin.moodArray[austin.mood]}`
    tired.innerText= `tired ${austin.tired}`
    hunger.innerText= `hunger ${austin.hunger}`
    age.innerText= `age ${austin.age}`
    evolve.innerText=`evolution ${austin.evoltionPhases[austin.evoltion]}`
}
display()
const checkWinOrLose=()=>{
    if (austin.health<=0){
        const win = document.getElementById("win")
        win.innerText= "Your tomagotchi has died"
        clearInterval(interavlId)
        clearInterval(intervalID)
        clearInterval(iNtervalId)
        
    }
    if(austin.age>=7){
        const lose = document.getElementById("lose")
        lose.innerText= "you won the game"
        clearInterval(interavlId)
        clearInterval(intervalID)
        clearInterval(iNtervalId)
        
    }
    
}
const interval = () => {
    austin.health -= 5
    austin.mood--
    austin.hunger--
    austin.tired--
    if (austin.tired<5){
        austin.health-=4
    }
    if (austin.hunger<5){
        austin.health-=5
    }
    if (austin.hunger<=0){
        austin.health-=100
    }
    if (austin.hunger<=0){
        austin.health-=100
    }
    if(austin.mood<=0){
        austin.health-=100
    }
    
    display()
    checkWinOrLose()
}
const intervalAge = () => {
    austin.age++
    display()
    
}

const startButton = () => {
   interavlId= setInterval(interval, 5000)
    intervalID=setInterval(intervalAge, 10000)
    iNtervalId=setInterval(()=>{austin.evolve()}, 10000)
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

