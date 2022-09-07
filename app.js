// Set timeout

// setTimeout(function() {
//     alert("Prepare to Battle!");
// }, 5000);

// Create ship class
class Ship {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}

	attack(enemies) {
        // determines if hit or not
        let randomNum = Math.floor(Math.random() * 5);
		console.log(randomNum);
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].hull > 0) {
                console.log(enemies)
            }
        }
		}
	}

// Create ship instance
let user = new Ship("USS Enterprise");
user.attack();



class Alien {
	constructor(name) {
		this.name = name;
		this.hull = Math.floor(Math.random() * 4) + 3;
		this.firepower = Math.floor(Math.random() * 3) + 2;
		this.accuracy = Math.floor(Math.random() * 3) + 6 / 10;
	}
}




// Create Alien Ships
let enemies = [];
enemies.unshift((al6 = new Alien("Alien #6"))),
	enemies.unshift((al5 = new Alien("Alien #2"))),
	enemies.unshift((al4 = new Alien("Alien #3"))),
	enemies.unshift((al3 = new Alien("Alien #4"))),
	enemies.unshift((al2 = new Alien("Alien #5"))),
	enemies.unshift((al1 = new Alien("Alien #6")))






// select playerstats div class = playerStats

// create 3 p elements to add hull, firepower and accuracy stats

// add stats to p elements

// Append p elements to the div

// select enemy stats div class = enemyStats

// create 3 p element to add hull, firepower and accuracy stats

// add stats to p elements

// Append p elements to the div

