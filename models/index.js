const User = require('./User');
const Characters = require('./Characters');
const Item = require('./Item');
const CharacterItem = require('./CharacterItem');

User.hasMany(Characters, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Characters.belongsTo(User, {
    foreignKey: 'user_id'
});

Characters.hasOne(CharacterItem, {
    foreignKey: 'character_id',
    onDelete: 'CASCADE'
});

CharacterItem.belongsTo(Characters, {
    foreignKey: 'character_id'
});

Item.hasMany(CharacterItem, {
    foreignKey: 'item_id',
    onDelete: 'CASCADE'
});

CharacterItem.belongsTo(Item, {
    foreignKey: 'item_id'
});

module.exports = { 
    User,
    Characters,
    Item,
    CharacterItem
};
