const User = require('./User');
const Characters = require('./Characters');
const Item = require('./Item');

User.hasMany(Characters, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Characters.hasMany(Item, {
    foreignKey: 'characters_id',
    onDelete: 'CASCADE',
});

Characters.belongsTo(User, {
    foreignKey: 'user_id'
});

Item.belongsTo(Characters, {
    foreignKey: 'characters_id',
});

module.exports = { 
    User,
    Characters,
    Item
};
