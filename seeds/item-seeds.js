const { Items } = require('../models');

const itemData = [
  {
    item_name: 'Katana',
    description: 'Quick and agile melee item',
    strength: 15, 
  },
  {
    item_name: 'long sword',
    description: 'versatile melee item',
    strength: 25, 
  },
  {
    item_name: 'staff',
    description: 'helps mage conjure magical abilities',
    strength: 35, 
  },
  {
    item_name: 'long bow',
    description: 'Bow and arrow for accuracy at range',
    strength: 30, 
  }
]

const seedItems = () => Items.bulkCreate(itemData);

module.exports = seedItems;