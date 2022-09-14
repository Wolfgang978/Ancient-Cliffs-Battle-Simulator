const User = require('./User');
const Character = require('./Character');
const Item = require('./Item');

User.hasMany(Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Character.hasMany(Item, {
    foreignKey: 'characters_id',
    onDelete: 'CASCADE',
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

Item.belongsTo(Character, {
    foreignKey: 'characters_id',
});

module.exports = { 
    User,
    Character,
    Item
};
