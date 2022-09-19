const { CharacterItem } = require('../models');

const characterItemData = [
  {
    character_id: 1,
    item_id: 1 
  },
  {
    character_id: 2,
    item_id: 2
  },
  { 
    character_id: 3,
    item_id: 3 
  },
  {
    character_id: 4,
    item_id: 4 
  }
]

const seedCharacterItems = () => CharacterItem.bulkCreate(characterItemData);

module.exports = seedCharacterItems;