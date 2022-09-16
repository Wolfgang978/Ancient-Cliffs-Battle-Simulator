const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./character-creation');
const battleRoutes = require('./battle');
const createRoutes = require('./create');

router.use('/battle', battleRoutes);
router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/create', createRoutes);

module.exports = router;
