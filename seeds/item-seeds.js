const { Item } = require('../models');

const itemData = [
  {
    item_name: 'Katana',
    description: 'Quick and agile melee item',
    damage: 15,
    characters_id: 1 
  },
  {
    item_name: 'long sword',
    description: 'versatile melee item',
    damage: 10, 
    characters_id: 2
  },
  {
    item_name: 'staff',
    description: 'helps mage conjure magical abilities',
    damage: 18, 
    characters_id: 3 
  },
  {
    item_name: 'long bow',
    description: 'Bow and arrow for accuracy at range',
    damage: 15,
    characters_id: 4 
  }
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;