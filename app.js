// soldier class
class Soldier {
  constructor(name, hull, firepower, accuracy) {
    this.name = name
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
  }
  attack(alien) {
    if (alien) {
      alien.hull -= this.firepower
    }
    console.log(`Soldier attacked ${alien.name}`)
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
class Alien extends Soldier {
  constructor(name) {
    super(name)
    this.name = name
    this.hull = Math.floor(Math.random() * 4) + 3
    this.firepower = Math.floor(Math.random() * 3) + 2
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
  }
  attack(user) {
    user.hull -= this.firepower
    console.log(`${this.name} attacked Soldier`)
    if (user.hull <= 0) {
      alert("Game Over: Soldier Lost")
    } else {
      const input = prompt("attack || retreat")
      if (input === "attack") {
        user.attack(aliens.find(alien => alien.hull > 0))
      } else {
        alert("Game Over")
      }
    }
  }
}
// user instance
const user = new Soldier("User", 20, 5)
// aliens
const aliens = [
  new Alien("Alien 1"),
  new Alien("Alien 2"),
  new Alien("Alien 3"),
  new Alien("Alien 4"),
  new Alien("Alien 5"),
  new Alien("Alien 6")
]
const startMessage = alert("GAME STARTED: Soldier fired on Alien")
user.attack(aliens.find(alien => alien.hull > 0));