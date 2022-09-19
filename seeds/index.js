const seedCharacters = require('./character-seeds.js');
const seedItems = require('./item-seeds.js');
const seedCharacterItems = require('./characterItem-seeds.js');

const sequelize = require('../config/connection.js');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCharacters();
  console.log('\n----- CHARACTERS SEEDED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');
  await seedCharacterItems();
  console.log('\n----- CHARACTERITEMS SEEDED -----\n');

  process.exit(0);
};

seedAll();
