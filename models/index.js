const User = require('./User');
const Character = require('./Character');
const Item = require('./Item');

User.hasMany(Character, {
    foreignKey: 'user_id',
});

Character.hasMany(Item, {
    foreignKey: 'item_id'
});

Character.belongsTo(User);

Item.belongsTo(Character);

module.exports = { 
    User,
    Character,
    Item
};
