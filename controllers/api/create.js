const router = require('express').Router();
const { User, Characters} = require('../../models');

router.get('/', async (req, res) => {
    res.render('create', {
        loggedIn: req.session.logged_in,
    })
  });

  router.post('/', async (req, res) => {
    try {
      const charData = await Characters.create({
        character_name: req.body.charName,
        character_class: req.body.charClass,
        description: req.body.description,
        strength: req.body.strength,
        dexterity: req.body.dexterity,
        hitpoints: req.body.hitpoints,
        armorClass: req.body.armorClass,
        user_id: req.session.user_id
      });
      res.render('characters', {
        charData,
        loggedIn: req.session.logged_in,
      });
      res.status(200).json(charData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;
  