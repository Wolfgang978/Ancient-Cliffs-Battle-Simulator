const router = require('express').Router();
const { User, Characters, Item } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const characterData = await Characters.findAll({
      include: { model: Item }
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  
    try {
      const characterData = await Characters.findByPk(req.params.id, {
        include: [
          {
            model: Characters,
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