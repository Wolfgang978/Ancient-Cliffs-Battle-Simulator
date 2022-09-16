const router = require('express').Router();
const { Character, Item } = require('../../models');


router.get('/', async (req, res) => {
  
  
    res.render('battle', {
     
      loggedIn: req.session.logged_in,
    });
    
  
}
);


router.get('/:id', async (req, res) => {
  
  try {
    const characterData = await Characters.findByPk(req.params.id, {
      include: [
        { model: Characters, model: Item, },
      ],
    });
    res.status(200).json(characterData);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
);






module.exports = router;