const router = require('express').Router();
const { User, Character } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      include: [{ model: Character }, { model: Item }] });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  
    try {
      const characterData = await Character.findByPk(req.params.id, {
        include: [
          {
            model: Character,
            attributes: [
              'id',
              'character_name',
              'description',
              'hitpoints',
              
            ],
            model: Item,
            attributes: [
              'id',
              'item_name',
              'description',
              'strength',
              
            ],
          },
        ],
      });
      const gallery = characterData.get({ plain: true });
      res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);








module.exports = router;