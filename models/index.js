const User = require('./User');
const Character = require('./Characters');
const Items = require('./Items')

User.hasMany(Character);

Character.hasMany(Items, {
    foreignKey: 'item_id'
});

Character.belongsTo(User);

Items.belongsTo(Character);

module.exports = { 
    User,
    Character,
    Items
};
