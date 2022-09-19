const characterSelectButton = document.querySelector("#characterSelectButton")
const characterSelectButton2 = document.querySelector("#characterSelectButton2")
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
const labelCharacter2 = document.querySelector(".labelCharacter2")
const charClass1 = document.querySelector("#charClass1")
const charClass2 = document.querySelector("#charClass2")



var allCharacters = []
const grabCharacter2 = async () => {
  const alloftheCharacters = await fetch('/api/characters/characters');

  allCharacters = await alloftheCharacters.json();
  
}

grabCharacter2()

const characterSelectFunction = function() {
let option = []
let option2 = []
  for (let i = 0; i < allCharacters.length; i++) {
    option[i] = document.createElement("option")
    option2[i] = document.createElement("option")
    option[i].textContent = `${allCharacters[i].character_name}`
    option2[i].textContent = `${allCharacters[i].character_name}`
    option[i].setAttribute("value", i)
    option2[i].setAttribute("value", i)
    charClass1.appendChild(option[i])
    charClass2.appendChild(option2[i])
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


  
  
  Character.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
      
      return true;
    }
    
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
  
  



const warrior = new Character('Crusher', 'Warrior', 18, 12, 75, 24, 12);
const rogue = new Character('Dodger', 'Rogue', 15, 18, 60, 22, 10);

let warriorTurn = true;

let character2Select = false
let characterSelect = false
const turnInterval = function() {
  if (!characterSelect) {
    
    
    character2Select = new Character(allCharacters[charClass123].character_name, allCharacters[charClass123].character_class, allCharacters[charClass123].strength, allCharacters[charClass123].dexterity, allCharacters[charClass123].hitpoints, allCharacters[charClass123].armorClass, 15);
    characterSelect = new Character(allCharacters[charClass12].character_name, allCharacters[charClass12].character_class, allCharacters[charClass12].strength, allCharacters[charClass12].dexterity, allCharacters[charClass12].hitpoints, allCharacters[charClass12].armorClass, 15);
   
  }
 
  
  if (warriorTurn) {
        divClass1.textContent = `${characterSelect.character_name}'s turn`
    divClass2.textContent = `${character2Select.character_name} had ${character2Select.hitpoints} hitpoints before ${characterSelect.character_name} attacked`
    characterSelect.attack(character2Select);
    divClass3.textContent = `${character2Select.character_name} had ${character2Select.hitpoints} hitpoints after ${characterSelect.character_name} attacked`
  } else {

    divClass1.textContent = `Enemy character ${character2Select.character_name}'s turn`
    divClass2.textContent = `${characterSelect.character_name} had ${characterSelect.hitpoints} hitpoints before ${character2Select.character_name} attacked`
    character2Select.attack(characterSelect);
    divClass3.textContent = `${characterSelect.character_name} had ${characterSelect.hitpoints} hitpoints after ${character2Select.character_name} attacked`
  }
  
  
  
  // Switch turns
  warriorTurn = !warriorTurn;
  if (!character2Select.isAlive() || !characterSelect.isAlive()) {
    clearInterval(turnInterval);
    
    if (!character2Select.isAlive()) {

      playButton.setAttribute("style", "visibility: hidden;")
      divClass6.textContent = `${characterSelect.character_name} had ${characterSelect.hitpoints} hitpoints left`
      divClass7.textContent = `Chosen character ${characterSelect.character_name} wins. Good job!`
    } else {
      playButton.setAttribute("style", "visibility: hidden;")
      divClass6.textContent = `${character2Select.character_name} had ${character2Select.hitpoints} hitpoints left`
      divClass7.textContent = `Enemy wins. Sad job :(`
    }
  }
};
var charClass12 = 0
var charClass123 = 0
const hidingandshowing = function() {
  charClass12 = document.querySelector('#charClass1').value;
  characterSelectionStartButton.setAttribute("style", "visibility: hidden;")
  characterSelectButton.setAttribute("style", "visibility: hidden;")
  
  charClass1.setAttribute("style", "visibility: hidden;")
  labelCharacter.setAttribute("style", "visibility: hidden;")
  characterSelectButton2.setAttribute("style", "visibility: visible;")
  charClass2.setAttribute("style", "visibility: visible;")
  labelCharacter2.setAttribute("style", "visibility: visible;")

}
const hidingandshowing2 = function() {
  charClass123 = document.querySelector('#charClass2').value;
  characterSelectButton2.setAttribute("style", "visibility: hidden;")

  
  charClass2.setAttribute("style", "visibility: hidden;")
  labelCharacter2.setAttribute("style", "visibility: hidden;")
  playButton.setAttribute("style", "visibility: visible;")

}



characterSelectButton.addEventListener("click", hidingandshowing)
characterSelectButton2.addEventListener("click", hidingandshowing2)
playButton.addEventListener("click", turnInterval)
characterSelectionStartButton.addEventListener("click", characterSelectFunction)

