// routes/index.js
const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

router.use('/users', userRoutes);      // Routes for user operations
router.use('/thoughts', thoughtRoutes);// Routes for thought operations

module.exports = router;
