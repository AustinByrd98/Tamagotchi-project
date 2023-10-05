const name = prompt("Welcome to my Tamagotchi game to start name your pet")
const nameTag = document.getElementById("name")
nameTag.innerText = ` name: ${name}`
const baby = document.getElementById("baby")
const babyClasses = baby.classList
const adult = document.getElementById("adult")
const adultClasses = adult.classList
const oldMan = document.getElementById("oldMan")
const oldManClasses = oldMan.classList

class Tamagotchi {
    constructor() {
        this.age = 0
        this.hunger = 10
        this.tired = 10
        this.mood = 5
        // only 6 items in this array
        this.moodArray = ["dead", "you should check on your Tamagotchi!!", "mad", "i'm fine", "ok", "happy"]
        this.health = 100
        this.evoltion = 0
        this.evoltionPhases = ["egg", "baby", "adult", "old man"]
        this.gameStart = false
    }


    eat() {

        if (this.hunger <= 9 && this.health < 100) {
            this.health += 5
            this.hunger++
        }
        display()
    }
    play() {
        // this.mood can not drop below 0 or go above 7
        console.log("play")
        // this.mood+=1
        if (this.mood === 5) {
            this.mood = 2
        } else if (this.mood <= 5 && this.mood > 0) {
            this.mood++
        }

        display()
    }
    sleep() {

        if (this.tired <= 10 && this.health < 100) {
            this.health += 10
            this.tired++
            console.log(this.tired)
        }
        display()

    }
    evolve() {
        if (this.age === 1) {
            this.evoltion++
            console.log("is this working")
            const egg = document.getElementById("egg")
            egg.remove()

            babyClasses.toggle("hidden")

        }
        if (this.age === 3) {
            this.evoltion++

            babyClasses.toggle("hidden")
            adultClasses.toggle("hidden")
        }
        if (this.age === 5) {
            this.evoltion++

            adultClasses.toggle("hidden")
            oldManClasses.toggle("hidden")
        }

        display()
    }
}

const austin = new Tamagotchi()

const display = () => {
    const health = document.getElementById("health")
    const mood = document.getElementById("mood")
    const tired = document.getElementById("tired")
    const hunger = document.getElementById("hunger")
    const age = document.getElementById("age")
    const evolve = document.getElementById("evolution")

    health.innerText = `health: ${austin.health}`
    mood.innerText = `mood: ${austin.moodArray[austin.mood]}`
    tired.innerText = `tired: ${austin.tired}`
    hunger.innerText = `hunger: ${austin.hunger}`
    age.innerText = `age: ${austin.age}`
    evolve.innerText = `evolution: ${austin.evoltionPhases[austin.evoltion]}`
}
display()
const checkWinOrLose = () => {
    if (austin.health <= 0) {
        const win = document.getElementById("win")
        win.innerText = "Your tomagotchi has died"
        clearInterval(interavlId)
        clearInterval(intervalID)
        clearInterval(iNtervalId)

    }
    if (austin.age >= 7) {
        const lose = document.getElementById("lose")
        lose.innerText = "you won the game"
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
    if (austin.tired < 5) {
        austin.health -= 4
    }
    if (austin.hunger < 5) {
        austin.health -= 5
    }
    if (austin.hunger <= 0) {
        austin.health -= 100
    }
    if (austin.hunger <= 0) {
        austin.health -= 100
    }
    if (austin.mood <= 0) {
        austin.health -= 100
    }

    display()
    checkWinOrLose()
}
const intervalAge = () => {
    austin.age++
    display()

}

const startButton = () => {
    interavlId = setInterval(interval, 7000)
    intervalID = setInterval(intervalAge, 10000)
    iNtervalId = setInterval(() => { austin.evolve() }, 10000)
    austin.gameStart = true
}


const gameStart = document.getElementById("start")
gameStart.addEventListener("click", startButton)
const eatButton = document.getElementById("eat")
eatButton.addEventListener("click", () => { austin.eat() })
const sleepButton = document.getElementById("sleep")
sleepButton.addEventListener("click", () => { austin.sleep() })
const playButton = document.getElementById("play")
playButton.addEventListener("click", () => { austin.play() })

