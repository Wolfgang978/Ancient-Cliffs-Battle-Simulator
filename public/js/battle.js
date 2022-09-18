const characterSelectButton = document.querySelector("#characterSelectButton")
const playButton = document.querySelector("#playButton")
const characterSelectionStartButton = document.querySelector("#characterSelectionStartButton")
const divClass1 = document.querySelector(".theDivClass1")
const divClass2 = document.querySelector(".theDivClass2")
const divClass3 = document.querySelector(".theDivClass3")
const divClass4 = document.querySelector(".theDivClass4")
const divClass5 = document.querySelector(".theDivClass5")
const divClass6 = document.querySelector(".theDivClass6")
const divClass7 = document.querySelector(".theDivClass7")
const divClass8 = document.querySelector(".theDivClass8")
const divClass9 = document.querySelector(".theDivClass9")
const labelCharacter = document.querySelector(".labelCharacter")
const charClass1 = document.querySelector("#charClass1")


var character = {}
const grabCharacter = async () => {
  
  const characterOne = await fetch("/api/characters/1");

  character = await characterOne.json();
 


  
}
var allCharacters = []
const grabCharacter2 = async () => {
  const alloftheCharacters = await fetch('/api/characters/characters');

  allCharacters = await alloftheCharacters.json();
  console.log(typeof allCharacters)
  console.log("this one is the different one")
  console.log(allCharacters)
  
}
grabCharacter()
grabCharacter2()

const characterSelectFunction = function() {
let option = []
let value = []
  for (let i = 0; i < allCharacters.length; i++) {
    option[i] = document.createElement("option")
    option[i].textContent = `${allCharacters[i].character_name}`
    option[i].setAttribute("value", i)
    charClass1.appendChild(option[i])
  }
  characterSelectionStartButton.setAttribute("style", "visibility: hidden;")
  characterSelectButton.setAttribute("style", "visibility: visible;")
  charClass1.setAttribute("style", "visibility: visible;")
  labelCharacter.setAttribute("style", "visibility: visible;")
 
  
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
      divClass5.textContent = `damage: ${damageTaken}`
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

let characterSelect = false
const turnInterval = function() {
  if (!characterSelect) {
    console.log(charClass12)

    characterSelect = new Character(allCharacters[charClass12].character_name, allCharacters[charClass12].character_class, allCharacters[charClass12].strength, allCharacters[charClass12].dexterity, allCharacters[charClass12].hitpoints, allCharacters[charClass12].armorClass, 12);
    // characterSelect = new Character(character.character_name, character.character_class, character.strength, character.dexterity, character.hitpoints, character.armorClass, 12);
    // characterSelect = new Character(character.character_name, character.character_class, character.strength, character.dexterity, character.hitpoints, character.armorClass, character.items[0].damage);
    console.log(characterSelect)
  }
  // If either character is not alive, end the game
  
  if (warriorTurn) {
    divClass1.textContent = "Warrior turn"
    console.log("Warrior turn")
    divClass2.textContent = `${characterSelect.character_name} health before: ${characterSelect.hitpoints}`
    console.log(`${characterSelect.character_name} health: ${characterSelect.hitpoints}`);
    warrior.attack(characterSelect);
    divClass3.textContent = `${characterSelect.character_name} health after: ${characterSelect.hitpoints}`
    
    console.log(`${characterSelect.character_name} health: ${characterSelect.hitpoints}`);
  } else {
    divClass1.textContent = `${characterSelect.character_name} turn`
    console.log("Rogue turn")
    divClass2.textContent = `Warrior health before: ${warrior.hitpoints}`
    console.log(`Warrior health: ${warrior.hitpoints}`);
    characterSelect.attack(warrior);
    divClass3.textContent = `Warrior health after: ${warrior.hitpoints}`
    console.log(`Warrior health: ${warrior.hitpoints}`);
  }
  
  console.log(`\n Turn Switch \n`)
  
  // Switch turns
  warriorTurn = !warriorTurn;
  if (!warrior.isAlive() || !characterSelect.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
    if (!warrior.isAlive()) {
      console.log("rogue Wins")
    } else {
      console.log("warrior Wins")
    }
  }
};
var charClass12 = 0
const hidingandshowing = function() {
  charClass12 = document.querySelector('#charClass1').value;
  characterSelectionStartButton.setAttribute("style", "visibility: hidden;")
  characterSelectButton.setAttribute("style", "visibility: hidden;")
  
  charClass1.setAttribute("style", "visibility: hidden;")
  labelCharacter.setAttribute("style", "visibility: hidden;")
  playButton.setAttribute("style", "visibility: visible;")

  console.log(charClass12)
}



characterSelectButton.addEventListener("click", hidingandshowing)
playButton.addEventListener("click", turnInterval)
characterSelectionStartButton.addEventListener("click", characterSelectFunction)

