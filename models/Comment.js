const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    commentary: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'post',
        key: 'id'
      }
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'User',
        key: 'id'
      }
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;