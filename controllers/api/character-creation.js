const router = require('express').Router();
const { User, Characters, Item } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const characterData = await Characters.findAll({
      include: { model: Item }
    }
    );
    const charMetaData = characterData.map((newData) =>
      newData.get({ plain: true })
    );
    console.log(charMetaData)
    res.render('characters', {
      charMetaData,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {

  try {
    const characterData = await Characters.findByPk(req.params.id, {
      include: [
        { model: Characters, model: Item, },
      ],
    });
    res.status(200).json(characterData);
    return characterData;

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