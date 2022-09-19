const { Item } = require('../models');

const itemData = [
  {
    item_name: 'Katana',
    description: 'Quick and agile melee item',
    damage: 15
  },
  {
    item_name: 'Long Sword',
    description: 'versatile melee item',
    damage: 10 
  },
  {
    item_name: 'Staff',
    description: 'helps mage conjure magical abilities',
    damage: 18 
  },
  {
    item_name: 'Long Bow',
    description: 'Bow and arrow for accuracy at range',
    damage: 15
  },
  {
    item_name: 'Morningstar',
    description: 'Bludgeoning melee weapon',
    damage: 13
  },
  {
    item_name: 'Battleaxe',
    description: 'Slashing melee weapon',
    damage: 16
  },
  {
    item_name: 'Spear',
    description: 'Throwable peirce melee weapon',
    damage: 17
  },
  {
    item_name: 'Sling',
    description: 'Bludgeoning ranged weapon',
    damage: 14
  }
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;