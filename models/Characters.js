const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Characters extends Model { }

Characters.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        character_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        character_class: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 5,
                max: 20,               
              }
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 10,
                max: 20,               
              }
        },
        hitpoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 80,
                max: 100,               
              }
        },
        armorClass: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 10,
                max: 25,               
              }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'user',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'characters',
    }
);

module.exports = Characters;
