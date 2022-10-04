const { Comment } = require('../models')

const commentData = [
  {
    id: 1,
    content: '1',
    post_id: 3,
    user_id: 5
  },
  {
    id: 2,
    content: '12',
    post_id: 1,
    user_id: 4
  },
  {
    id: 3,
    content: '123',
    post_id: 5,
    user_id: 3
  },
  {
    id: 4,
    content: '1234',
    post_id: 2,
    user_id: 2
  },
  {
    id: 5,
    content: '12345',
    post_id: 4,
    user_id: 1
  },
]



const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;