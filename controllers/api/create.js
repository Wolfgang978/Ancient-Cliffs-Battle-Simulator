const router = require('express').Router();
const { Item, Characters, CharacterItem} = require('../../models');

router.get('/', async (req, res) => {
    const itemData = await Item.findAll();
    const items = itemData.map((item) =>
      item.get({ plain: true }) 
    );
    res.render('create', {
        loggedIn: req.session.logged_in,
        items
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
    await CharacterItem.create({
      character_id: charData.get('id'),
      item_id: req.body.charItem
    })
    res.render('characters', {
      charData,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
  