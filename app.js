// setTimeout(function () {
// 	alert("Welcome to Space Battle");
// }, 5000);

function startMessage() {
	alert(
		`This is the starship enterprise on a five year mission to explore the galaxy.\nOn our journey to planet Z-Delta2, we have encountered six hostile alien ships.\nThey appear to be Ding Dongs from planet Dinga Ling.\nFrom our experience with the Dingdonglingians, we know they are very hostile and will not hesitate to destroy anything in there path.\n  However, We will take the first strike!`
	);
	alert(`Battle stations! ${player.name} is firing on ${aliens[0].name}`);
}

function attackMessage() {
	alert(
		"Red Alert!, Red alert!... Prepare for impact, The Dinglingians are attacking!"
	);
}

// Confirm if the player wants to continue the attack
function confirmation() {
	const input = confirm("Do you want to continue the attack?");
	if (input) {
		// player.attack(aliens.find((alien) => alien.hull > 0));
		alert(`${player.name} attacked ${aliens[0].name}`);
	}
	if (input === false) {
		alert(
			`${player.name} is retreating...Game Over!...Refresh the page to play again`
		);
		stopPropagation();
	}
}

// check if game is over
//  if not, start with another alien

function checkIfWon() {
	if (aliens.length === 0) {
		alert(
			`Awesome ${player.name} won the battle!, Refresh the page or press OK to play again`
		);
		stopPropagation();
	} else {
		alert(`Keep fighting!... There are ${aliens.length} aliens left`);
	}
}

function alienDestroyed() {
	if (aliens[0].hull <= 0) {
		alert(`${player.name} destroyed ${aliens[0].name}`);
		aliens.splice(0, 1);
	} else {
		alert("Nice Shot he's going down!");
	}
}

//// If player is defeated then game is over

function playerDefeated(player) {
	if (player.hull <= 0) {
		alert(
			`Snaps!!! your ship blew up! ${player.name} is destroyed! Refresh the page to play again`
		);
	} else {
		alert(`${player.name} is still alive!...Hull is at ${player.hull}`);
	}
}

// ship constructor

class Ship {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}

	// Check the players hull damage
	playerHealth() {
		console.log(`The ${this.name} shields are now ${this.hull}`);
		alert(`The ${this.name} shields are now ${this.hull}`);
	}

	attack(aliens) {
		if (aliens) {
			if (this.hull > 0) {
				if (Math.random() < this.accuracy) {
					aliens.hull -= this.firepower;
					alert(
						`${aliens.name} got hit, their health is down to ${aliens.hull}`
					);
				} else {
					alert(`${player.name} Missed`);
				}
			}
		}
	}
}

// instantiate the player
let player = new Ship("USS Enterprise", 20, 5, 0.7);

// Create the aliens Class
class Alien {
	constructor(name) {
		this.name = name;
		this.hull = Math.floor(Math.random() * 4) + 3; //// make random between 3 & 6
		this.firepower = Math.floor(Math.random() * 3) + 2; // random between 2 & 4
		this.accuracy = Math.floor(Math.random() * Math.floor(9)) / 10; // random between 0.6 & 0.8
	}

	// Check the aliens hull damage
	alienHealth() {
		alert(`The ${this.name} shields are now ${this.hull}`);
	}

	aliensAttackPlayer(player) {
		if (player) {
			if (Math.random() < this.accuracy) {
				player.hull -= this.firepower;
				alert(
					`${this.name} Hit your ship! ${player.name} took ${this.firepower} damage`
				);
			} else {
				alert(
					`${aliens[0].name} missed ${player.name} took no damage. Hull power at ${player.hull}`
				);
			}
		}
	}
}

// instantiate the aliens

let aliens = [];

aliens.unshift((al6 = new Alien("ALIEN #6")));
aliens.unshift((al5 = new Alien("ALIEN #5")));
aliens.unshift((al4 = new Alien("ALIEN #4")));
aliens.unshift((al3 = new Alien("ALIEN #3")));
aliens.unshift((al2 = new Alien("ALIEN #2")));
aliens.unshift((al1 = new Alien("ALIEN #1")));

// Start the game
startMessage();

while (aliens.length > 0) {
	confirmation();
	player.attack(aliens[0]);
	alienDestroyed();
	checkIfWon();
	attackMessage();
	aliens[0].aliensAttackPlayer(player);
	playerDefeated(player);
}
