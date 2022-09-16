const playButton = document.querySelector("#playButton")
const divClass1 = document.querySelector(".theDivClass1")
const divClass2 = document.querySelector(".theDivClass2")
const divClass3 = document.querySelector(".theDivClass3")
const divClass4 = document.querySelector(".theDivClass4")
const divClass5 = document.querySelector(".theDivClass5")
const divClass6 = document.querySelector(".theDivClass6")


const grabCharacter = async () => {
  const characterOne = await fetch('/api/characters/1');

  const character = await characterOne.json();
  console.log(typeof character)
  console.log("hellotherecharacterone")
  console.log(character)
  
}
grabCharacter()



function Character (character_name, character_class, strength, dexterity, hitpoints, armorClass, damage) {
  this.character_name = character_name;
  this.character_class = character_class;
  this.strength = strength;
  this.dexterity = dexterity;
  this.hitpoints = hitpoints;
  this.armorClass = armorClass;
  this.damage = damage;

}


Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.character_name}\nCharacter_class: ${this.character_class}\nDexterity: ${this.dexterity}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}\nArmorClass: ${this.armorClass}\ndamage: ${this.damage}`
  );
  console.log('\n-------------\n');
};


Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.character_name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.character_name} has died!`);
  return false;
};


Character.prototype.attack = function (character2) {
  let hitRoll = (Math.floor(Math.random() * 20) + 1)
  divClass5.textContent = ""
  divClass6.textContent = ""
  divClass4.textContent = `Roll to hit: ${hitRoll}`
  if (hitRoll === 20) {
    let damageTaken = 2 * (Math.floor(this.strength*.25) + (Math.floor(Math.random() * this.damage) + 1));
    character2.hitpoints -= damageTaken
    divClass5.textContent = `damage: ${damageTaken}`
    divClass6.textContent = "critical hit"
    return

  } else if (hitRoll === 1) {
   this.hitpoints -= 4 
   divClass5.textContent = "critical failure"
   return
  } else if ((hitRoll + this.dexterity) > character2.armorClass) {
    let damageTaken = Math.floor(this.strength*.25) + (Math.floor(Math.random() * this.damage) + 1);
    character2.hitpoints -= damageTaken
    divClass6.textContent = `damage: ${damageTaken}`
  return
  } 
  divClass5.textContent = `Miss`
  return
};


Character.prototype.levelUp = function () {
  
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 18, 12, 75, 24, 12);
const rogue = new Character('Dodger', 'Rogue', 15, 18, 60, 22, 10);


let warriorTurn = true;


const turnInterval = function() {
  // If either character is not alive, end the game
  if (!warrior.isAlive() || !rogue.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
    if (!warrior.isAlive()) {
      console.log("rogue Wins")
    } else {
      console.log("warrior Wins")
    }
  } else if (warriorTurn) {
    divClass1.textContent = "Warrior turn"
    console.log("Warrior turn")
    divClass2.textContent = `Rogue health before: ${rogue.hitpoints}`
    console.log(`Rogue health: ${rogue.hitpoints}`);
    warrior.attack(rogue);
    divClass3.textContent = `Rogue health after: ${rogue.hitpoints}`
    console.log(`Rogue health: ${rogue.hitpoints}`);
  } else {
    divClass1.textContent = "Rogue turn"
    console.log("Rogue turn")
    divClass2.textContent = `Warrior health before: ${warrior.hitpoints}`
    console.log(`Warrior health: ${warrior.hitpoints}`);
    rogue.attack(warrior);
    divClass3.textContent = `Warrior health after: ${warrior.hitpoints}`
    console.log(`Warrior health: ${warrior.hitpoints}`);
  }

console.log(`\n Turn Switch \n`)

// Switch turns
warriorTurn = !warriorTurn;
};
playButton.addEventListener("click", turnInterval)

// const turnInterval = setInterval(() => {
//   // If either character is not alive, end the game
//   if (!warrior.isAlive() || !rogue.isAlive()) {
//     clearInterval(turnInterval);
//     console.log('Game over!');
//     if (!warrior.isAlive()) {
//       console.log("rogue Wins")
//     } else {
//       console.log("warrior Wins")
//     }
//   } else if (warriorTurn) {
//     console.log("Warrior turn")
//     console.log(`Rogue health: ${rogue.hitpoints}`);
//     warrior.attack(rogue);
//     console.log(`Rogue health: ${rogue.hitpoints}`);
//   } else {
//     console.log("Rogue turn")
//     console.log(`Warrior health: ${warrior.hitpoints}`);
//     rogue.attack(warrior);
//     console.log(`Warrior health: ${warrior.hitpoints}`);
//   }
// console.log(`\n Turn Switch \n`)
//   // Switch turns
//   warriorTurn = !warriorTurn;
// }, 100);