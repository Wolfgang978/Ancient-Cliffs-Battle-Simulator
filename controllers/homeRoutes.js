const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {

  res.render('homepage', {
    
    loggedIn: req.session.logged_in,
  });

 
});







router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});













module.exports = router;