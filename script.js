

class Tamagotchi {
    constructor() {
        this.name = ""
        this.age = 0
        this.hunger = 20
        this.tired = 20
        // i want to make this.mood reference an array of moods and display that instead of a number
        this.mood = 0
        // only 6 items in this array
        this.moodArray = ["happy", "ok", "i'm fine", "mad", "you should check on your Tamagotchi!!", "dead"]
        this.health = 100
        this.gameStart=false
    }
    //need a timer function that runs at start up and increaments age, hunger,tired


    //need a math function that decreaes heath baised on abouve factors 
    eat() {
        if (this.health < 100) {
            this.health += 5
        }
    }
    play() {
        // this.mood can not drop below 0 or go above 7
        console.log("play")
        // this.mood+=1
        if (this.mood < 6 && this.mood >= 0) {
            this.mood++
        } else {
            this.mood = 3
        }
    }
    sleep() {
        this.tired++
        if (this.health < 100) {
            this.health += 10
        }
        // i will need a display method here
    }
}
const austin = new Tamagotchi()
const display=()=>{
    const health= document.getElementById("health")
    const mood= document.getElementById("mood")
    const tired=document.getElementById("tired")
    const hunger= document.getElementById("hunger")
    const age= document.getElementById("age")

    health.innerText=`health ${austin.hunger}`
    mood.innerText=`mood ${austin.mood}`
    tired.innerText= `tired ${austin.tired}`
    hunger.innerText= `hunger ${austin.hunger}`
    age.innerText= `age ${austin.age}`
}
display()
const interval = () => {
    austin.health -= 5
    austin.hunger--
    austin.tired--
    display()
}
const intervalAge = () => {
    austin.age++
    console.log(austin.age)
    display()
    
}
const startButton = () => {
    setInterval(interval, 3000)
    setInterval(intervalAge, 10000)
    austin.gameStart=true
    console.log(austin.age)
   
}
const gameStart=document.getElementById("start")
gameStart.addEventListener("click",startButton)


