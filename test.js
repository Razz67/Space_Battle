
// setTimeout(function () {
// 	alert(
// 		"Welcome to Brian's Space Battle page ! - open the console log on the page to play . Hurry the fate of the planet is at your fingertips Captian! If you chose to retreat at any time just leave the page. But know that choice has doomed Earth! "
// 	);
// }, 5000);


const battleWinCheck = (aliens) => {
	if (aliens.hull <= 0) {
		console.log("You blew up " + aliens.name + " Nice job!");
		alert(`You blew up ${aliens.name} Nice job!`);
		alienDestroyed();
	} else {
		console.log("keep shooting nice attack keep playing");
		alert("keep shooting nice attack keep playing");
		checkIfWon()
	}
};

// check if game is over
//  if not, start with another alien

const checkIfWon = () => {
	if (aliens[0] === "destroyed") {
		console.log(`${player.name} Won!`);
		alert(`Awesome ${player.name} won the battle!, Refresh the page to play again`);
	} else {
		console.log("Keep playing");
		if (aliens[3] === "destroyed") {
			aliens[0].attack(player);
		} else {
			aliens[0].fight(player); 
		}
	}
};


// when the last ship in the array is destroyed--Game Over!

const alienDestroyed = () => {
	if (aliens[0].hull <= 0) {
		console.log(`${player.name} destroyed an alien ship!`);
		aliens[aliens.length] = "destroyed";
		aliens.splice(0, 1);
		checkIfWon();
	} else {
		console.log("Nice Shot Keep Playing");
		checkIfWon();
	}
};

//// If player is defeated then game over

const playerDefeated = (player) => {
	if (player.hull <= 0) {
		console.log(`Game over ${player.name} is destroyed.... Refresh the page to play again`);
		alert(`Snaps!!! your ship blew up! ${player.name} is destroyed! Refresh the page to play again`);
	} else {
		alert("Your turn now captian enter your move below .. ");
		let  conformation = confirm("Do you want to continue the attack?");
		if (conformation) {
			aliens[0].fight(player);
		} else {
			console.log("Game Over");
			alert("Game Over");
		}
	}
};


// ship constructor

class Ship {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	
	attack(aliens) {
		if (this.hull >= 1) {
			if (aliens.name === aliens.name) {
				if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
						console.log(`${aliens.name} got hit, their health is down to`);
						console.log((aliens.hull += -10));
						alienDestroyed(aliens); // check if you destroyed the ship
					} else {
					console.log("You missed");
				}
			} else {
				let conformation = confirm("Do you want to continue this merciless attack?");
				if (conformation === true) {
					player.attack(aliens);
				}
			}
		} else {
			console.log(`${player.name} is destroyed... Refresh the page to play again`); 
		}
	}

}


// instantiate the player
let player = new Ship("USS Enterprise", 20, 5, 0.7);


// Create the aliens
class Alien {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = Math.floor(Math.random() * 4) + 3; //// make random between 3 & 6
		this.firepower = Math.floor(Math.random() * 3) + 2; // random between 2 & 4
		this.accuracy = (Math.floor(Math.random() * (.8 - .6) + .6).toFixed(1)); // random between .6 and .8 
	}
	announceHealth() {
		alert(`The ${this.name} shields are now ${this.hull}`);
	}

	fight(player) {
		if (this.name === aliens[0].name) {
			if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
			
				console.log((player.hull -= this.firepower));
				playerDefeated(player); 
			} else {
				alert(`${this.name} missed`);
				console.log(`Alien missed ${player.name} "took no damage. Hull power at ${player.hull}`);
				playerDefeated(player);
			}
		} else {
			playerDefeated(player);
		}
	}

	attack(player) {
		if (this.name === aliens[0].name) {
			if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
				console.log(`${this.name} Hit your ship!`);
				console.log(`${player.name} took ${this.firepower} damage`);
					
				alert(`${player.hull} += -7`); 
				playerDefeated(player); 
			} else {
				console.log(`${this.name} missed`);
				alert(`${player.name} took no damage. Hull power at ${player.hull}`);
				playerDefeated(player);
			}
		} else {
			playerDefeated(player);
		}
	}
}


let aliens = [];

aliens.unshift((alien6 = new Alien("ALIEN #6")));
aliens.unshift((alien5 = new Alien("ALIEN #5")));
aliens.unshift((alien4 = new Alien("ALIEN #4")));
aliens.unshift((alien3 = new Alien("ALIEN #3")));
aliens.unshift((alien2 = new Alien("ALIEN #2")));
aliens.unshift((alien1 = new Alien("ALIEN #1")));




const startMessage = alert(`GAME STARTED:    ${player.name} fired on ${aliens[0].name}`);
player.attack(aliens[0]);
battleWinCheck();

console.log("Red Alert!, Red alert!... Prepare for battle, The aliens are attacking!");
alert("Red Alert!, Red alert!... Prepare for battle, The aliens are attacking!");
playerDefeated(player);
// console.log(`${aliens.name} fired on ${player.name}`); 