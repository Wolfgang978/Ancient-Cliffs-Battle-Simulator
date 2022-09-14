const router = require('express').Router();
const { Character, Item } = require('../../models');

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
          
        },
      ],
    });
    const character = characterData.get({ plain: true });
    return character
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);

router.get('/:id', async (req, res) => {
  
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
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
    const item = itemData.get({ plain: true });
    return item
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);






module.exports = router;