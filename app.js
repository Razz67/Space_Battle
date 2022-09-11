// ship class
class Ship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack(alien) {
    if (alien) {
      alien.hull -= this.firepower
    }
    // console.log(`${user.name} attacked ${alien.name}`)
    if (alien.hull <= 0) {
      aliens.shift()
      if (this.hull > 0) {
        alien.attack(user)
      }
    } else {
      alien.attack(user)
    }
  }
}
// alien class
class Alien extends Ship {
  constructor(name) {
    super(name)
    this.name = name
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy =  (Math.floor(Math.random() * (.8 - .6) + .6).toFixed(1));
  }
  attack(user) {
    user.hull -= this.firepower
    alert(`${this.name} attacked ${user.name}`);
    if (user.hull <= 0) {
      alert("Game Over: Soldier Lost");
    } else {
      const input = confirm("Do you want to continue the attack?");
      if (input === "attack") {
        user.attack(aliens.find(alien => alien.hull > 0));
      } else {
        alert("Game Over");
      }
    }
  }
}
// user instance
const user = new Ship("USS Enterprise", 20, 5, 0.7);

    console.log(`Ship accuracy is: ${user.accuracy}`);
		console.log(`Ship firepower is: ${user.firepower}`);
		console.log(`Ship hull is: ${user.hull}`);



// aliens
const aliens = [
  new Alien("Alien 1"),
  new Alien("Alien 2"),
  new Alien("Alien 3"),
  new Alien("Alien 4"),
  new Alien("Alien 5"),
  new Alien("Alien 6")
]

    console.log(`alien accuracy is: ${aliens.accuracy}`);
		console.log(`alien firepower is: ${aliens.firepower}`);
		console.log(`alien hull is: ${aliens.hull}`);

const startMessage = alert(`GAME STARTED: ${user.name} fired on ${aliens[0].name}`);
user.attack(aliens.find(alien => alien.hull > 0));