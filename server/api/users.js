const router = require('express').Router();
const {
	models: { User, Pet, Accessorie, Order },
} = require('../db');

router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const users = await User.findAll({
				attributes: ['id', 'username', 'privledge'],
			});
			res.json(users);
		} catch (err) {
			next(err);
		}
	})
	.post(async (req, res, next) => {
		try {
			const user = await User.create(req.body);	
			res.status(201).send(user);
		} catch (err) {
			next(err);
		}
	});

router
	.route('/:id')
	.get(async (req, res, next) => {
		try {
			const user = await User.findByPk(req.params.id,
				 {include: [ 
					{model: Pet},
					{model: Accessorie},
					{model: Order}
				]});
			if (!user) {
				res.status(404).send({ message: 'User not found' });
				return;
			}
			res.send(user);
		} catch (err) {
			next(err);
		}
	})
	.put(async (req, res, next) => {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			res.status(404).send({ message: 'User not found' });
			return;
		}
		res.send(await user.update(req.body));
	});

module.exports = router;
