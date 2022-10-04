const { Post } = require('../models')

const postData = [
  {
    title: 'what do you want from me',
    contents: 'alot of stuff',
    user_id: 1
  },
  {
    title: 'the next one',
    contents: 'some stuff',
    user_id: 2
  },
  {
    title: 'the third one',
    contents: 'minimal stuff',
    user_id: 3
  },
  {
    title: '4th one',
    contents: 'less stuff',
    user_id: 4
  },
  {
    title: '5th one',
    contents: 'minimal to none',
    user_id: 5
  },
]



const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;