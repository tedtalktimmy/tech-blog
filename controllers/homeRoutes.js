const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'contents',
      'date_created'
    ],
    include: [
      {
        model: Comment,
        attributes: [
          'id',
          'commentary',
          'post_id',
          'user_id',
          'date_created'
        ],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
}).then()

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/dashboard', async (req, res) => {
  if(!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('dashboard', {loggedIn: (req.session.loggedIn)});
})

module.exports = router;