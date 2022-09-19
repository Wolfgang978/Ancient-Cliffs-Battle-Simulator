const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CharacterItem extends Model { }

CharacterItem.init({
  
  character_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'characters',
      key: 'id',
    },
    primaryKey: true
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'item',
      key: 'id',
    },
    primaryKey: true
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'character_item',
});




module.exports = CharacterItem;

