const router = require('express').Router();
module.exports = router;

<<<<<<< Updated upstream
router.use('/users', require('./users'))
=======
router.use('/users', require('./users'));
>>>>>>> Stashed changes

router.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});
