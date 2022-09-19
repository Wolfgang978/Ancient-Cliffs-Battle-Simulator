const router = require('express').Router();
const Sequelize = require('sequelize');
const { CharacterItem, Characters, Item } = require('../../models');
const { or } =  Sequelize.Op;

router.get('/', async (req, res) => {
  try {
    const userId = req.session.user_id
    const characterData = await Characters.findAll({
      include: { model: CharacterItem },
      where: {
        user_id: {
          [or]: [userId, null]
        }
      }
    });
    const itemData = await Item.findAll();
    const characters = characterData.map((character) => {
      return {
        ...character.get({ plain: true }),
        item: itemData.map((item) => item.get({plain: true})).find((item) => item.id === character.get('character_item').get('item_id'))
      }
    });
    res.render('characters', {
      characters,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/characters', async (req, res) => {

  try {
    const userId = req.session.user_id
    const characterData = await Characters.findAll({
      include: { model: CharacterItem },
      where: {
        user_id: {
          [or]: [userId, null]
        }
      }
    });
    
    res.status(200).json(characterData);
    // const allCharacters = characterData.get({ plain: true })
    

    return characterData;

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);
router.get('/:id', async (req, res) => {

  try {
    const characterData = await Characters.findByPk(req.params.id, {
      include: [
        { model: CharacterItem },
      ],
    });
    
    res.status(200).json(characterData);
    const character = characterData.get({ plain: true })

    return character;

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);
router.get('/characters/:id', async (req, res) => {

  try {
    const characterData = await Characters.findByPk(req.params.id, {
      include: [
        { model: CharacterItem },
      ],
    });
    
    res.status(200).json(characterData);
    

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);

router.post('/', async (req, res) => {
  try {
    const characterData = await Characters.create(req.body);
    res.status(200).json(characterData);
    res.render('create', {
      charMetaData,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post('/item', async (req, res) => {
  try {
    const itemData = await Item.create(req.body);
    res.status(200).json(itemData);
  } catch (err) {
    res.status(400).json(err);
  }
});







module.exports = router;