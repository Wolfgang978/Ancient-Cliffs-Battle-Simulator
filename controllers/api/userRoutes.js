const router = require('express').Router();
const { User } = require('../../models');


router.post('/login', async (req, res) => {
  try {

    const userData = await User.findOne({ where: { user_name: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }


    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body
    const newUser = await User.create({ user_name:username, password })

    res.json({ user: newUser, message: 'Your account has been made!' });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {

    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




module.exports = router;