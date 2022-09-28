const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }

}

Post.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Post',
        key: 'id'
      }
    },

    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
    underscored: true
  }
);

module.exports = Comment;