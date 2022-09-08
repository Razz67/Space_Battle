// create  a timeout fuction to run the attack function 
// setTimeout(function() {
// 	user.attack(aliens);
// }, 3000);
//
// create ship class 
class Ship {
	constructor(name) {
		this.name = name;
		this.hull = 20;
		this.firepower = 5;
		this.accuracy = 0.7;
	}
	attack(aliens) {
		if (this.hull >= 1) {
			if (aliens.hull <= 0) {
                console.log(`${aliens.name} is destroyed`);
                aliens.shift();
                console.log(aliens);
            } else {
                console.log(`${aliens.name} is still alive`);
            }
		} else {
			console.log("You are Dead play again soon");
		}
	}
}


// create alien class
class Alien extends Ship {
	constructor(name) {
		super(name);
		this.hull = Math.floor(Math.random() * 4) + 3; // between 3 & 6
		this.firepower = Math.floor(Math.random() * 3) + 2; // between 2 & 4
		this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; // between .6 and .8
	}
	attack(user) {
        console.log(alienDestroyed)
		user.hull -= this.firepower;
        alert(`Alien attack user: Solder: ${user.hull} Alien: ${this.hull}`)
		if (user.hull <= 0) {
            alert("Game Over: aliens lost")
			const newArrr = aliens.filter(alien => {
            } else { 
                attack(user);
            }
		}
	}
}
// // Create ship instance
let user = new Ship("USS Enterprise");


// Create Alien Ships

const aliens = [
    new Alien("Alien 6"),
    new Alien("Alien 5"),
    new Alien("Alien 4"),
    new Alien("Alien 3"),
    new Alien("Alien 2"),
    new Alien("Alien 1"),
]


// let aliens = [];
// aliens.unshift((a6 = new Alien("Alien #6"))),
// 	aliens.unshift((a5 = new Alien("Alien #5"))),
// 	aliens.unshift((a4 = new Alien("Alien #4"))),
// 	aliens.unshift((a3 = new Alien("Alien #3"))),
// 	aliens.unshift((a2 = new Alien("Alien #2"))),
// 	aliens.unshift((a1 = new Alien("Alien #1")));

// alert start game function 
const startMessage = alert("Welcome to Space Battle! Click OK to start the game");
user.attack(aliens.find)aliens ;


// Create a function to check if the alien is destroyed or not   
function alienDestroyed(aliens) {
	if (aliens.hull <= 0) {
		console.log(`${aliens.name} is destroyed`);
		aliens.shift();
		console.log(aliens);    
	} else {
		console.log(`${aliens.name} is still alive`);
	}
}

// Create a function to check if the user is destroyed or not 
function userDestroyed(aliens) {
	if (user.hull <= 0) {
		console.log("You are Dead play again soon");
	} else {
		console.log("You are still alive");
	}
}

const startMessage = alert("Welcome to the game, you are the USS Enterprise and you are under attack by 6 alien ships. You have 20 hull, 5 firepower, and 70% accuracy. You must destroy all 6 alien ships to win the game. Good Luck!");
// create a start game function
function startGame() {
    if (aliens.length >= 1) {
        user.attack(aliens);
    } else {
        console.log("You Won!");
    }
}