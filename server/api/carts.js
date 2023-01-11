const router = require('express').Router();
const {
	models: { Cart, User },
} = require('../db');

router.route('/cart').get(async (req, res) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const user = await User.findByToken(token);
		if (!user) {
			res.status(401).send({ error: 'Not authorized' });
			return;
		}
		const userCart = await Cart.findAll({ where: { userId: user.id } });
		res.send(userCart);
	} catch (err) {
		res.status(401).send({ error: 'Not authorized' });
	}
});

module.exports = router;