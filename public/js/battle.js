
const grabCharacter = async () => {
  const characterOne = await fetch('/api/characters/1', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(characterOne)
}




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
  

  console.log(`Roll to hit: ${hitRoll}`)
  if (hitRoll === 20) {
    let damageTaken = 2 * (Math.floor(this.strength*.25) + (Math.floor(Math.random() * this.damage) + 1));
    character2.hitpoints -= damageTaken
    console.log(`damage: ${damageTaken}`)
    console.log("critical hit")
    return

  } else if (hitRoll === 1) {
   this.hitpoints -= 4 
   console.log("critical failure")
   return
  } else if ((hitRoll + this.dexterity) > character2.armorClass) {
    let damageTaken = Math.floor(this.strength*.25) + (Math.floor(Math.random() * this.damage) + 1);
    character2.hitpoints -= damageTaken
    console.log(`damage: ${damageTaken}`)
  return
  } 
  console.log("miss")
  return
};


Character.prototype.levelUp = function () {
  
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 18, 12, 75, 24, 12);
const rogue = new Character('Dodger', 'Rogue', 15, 18, 60, 22, 10);


let warriorTurn = true;


const turnInterval = setInterval(() => {
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
    console.log("Warrior turn")
    console.log(`Rogue health: ${rogue.hitpoints}`);
    warrior.attack(rogue);
    console.log(`Rogue health: ${rogue.hitpoints}`);
  } else {
    console.log("Rogue turn")
    console.log(`Warrior health: ${warrior.hitpoints}`);
    rogue.attack(warrior);
    console.log(`Warrior health: ${warrior.hitpoints}`);
  }
console.log(`\n Turn Switch \n`)
  // Switch turns
  warriorTurn = !warriorTurn;
}, 100);