const { Character } = require('../models');

const characterData = [
  {
    character_name: 'Samurai',
    description: 'Quick and agile melee character',
    hitpoints: 100, 
  },
  {
    character_name: 'Vagabond',
    description: 'heavy armor melee character',
    hitpoints: 100, 
  },
  {
    character_name: 'Mage',
    description: 'Spell caster ranged character',
    hitpoints: 100, 
  },
  {
    character_name: 'Ranger',
    description: 'Bow and arrow ranged character',
    hitpoints: 100, 
  }
]

const seedCharacters = () => Character.bulkCreate(characterData);

module.exports = seedCharacters;