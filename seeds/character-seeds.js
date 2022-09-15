const { Characters } = require('../models');

const characterData = [
  {
    character_name: 'jack',
    character_class: 'Samurai',
    description: 'Quick and agile melee character',
    strength: 11,
    dexterity: 17,
    hitpoints: 100,
    armorClass: 22,

  },
  {
    character_name: 'billy',
    character_class: 'Vagabond',
    description: 'Heavy armor melee character',
    strength: 16,
    dexterity: 10,
    hitpoints: 100,
    armorClass: 16, 
  },
  {
    character_name: 'korbyn',
    character_class: 'Mage',
    description: 'Spell caster ranged character',
    strength: 6,
    dexterity: 15,
    hitpoints: 100,
    armorClass: 15, 
  },
  {
    character_name: 'max',
    character_class: 'Ranger',
    description: 'Bow and arrow ranged character',
    strength: 8,
    dexterity: 14,
    hitpoints: 100,
    armorClass: 18, 
  }
]

const seedCharacters = () => Characters.bulkCreate(characterData);

module.exports = seedCharacters;