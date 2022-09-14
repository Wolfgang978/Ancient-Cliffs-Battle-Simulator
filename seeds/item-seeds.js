const { Item } = require('../models');

const itemData = [
  {
    item_name: 'Katana',
    description: 'Quick and agile melee item',
    strength: 15,
    characters_id: 1 
  },
  {
    item_name: 'long sword',
    description: 'versatile melee item',
    strength: 25, 
    characters_id: 2
  },
  {
    item_name: 'staff',
    description: 'helps mage conjure magical abilities',
    strength: 35, 
    characters_id: 3 
  },
  {
    item_name: 'long bow',
    description: 'Bow and arrow for accuracy at range',
    strength: 30,
    characters_id: 4 
  }
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;