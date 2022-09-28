const { Post } = require('../models')

const postData = [
  {
    title: '',
    contents: '',
    user_id: ''
  },
  {
    title: '',
    contents: '',
    user_id: ''
  },
  {
    title: '',
    contents: '',
    user_id: ''
  },
  {
    title: '',
    contents: '',
    user_id: ''
  },
  {
    title: '',
    contents: '',
    user_id: ''
  },
]



const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;