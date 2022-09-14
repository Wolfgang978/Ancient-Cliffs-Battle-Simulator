const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./character-creation');
const battleRoutes = require('./battle');

router.use('/battle', battleRoutes);
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);

module.exports = router;
