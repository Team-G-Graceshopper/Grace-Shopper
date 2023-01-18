const router = require('express').Router();
const {
	models: { User, Pet },
} = require('../db');
const { requireToken } = require('./middleware');

router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const users = await User.findAll({
				attributes: ['id', 'username'],
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
			const user = await User.findByPk(req.params.id, {
				include: [{ model: Pet }, { model: Accessorie }],
			});
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

router.route('/profile').get(requireToken, async (req, res, next) => {
	// user view profile
	try {
		const user = await User.findByPk(req.user.id, {
			attributes: ['id', 'username', 'password'],
		});
		res.json(user);
	} catch (err) {
		next(err);
	}
});

router.route('/update').put(requireToken, async (req, res, next) => {
	// user edit profile
	try {
		const user = await User.findByPk(req.user.id, {
			attributes: ['id', 'username', 'password'],
		});
		await user.update(req.body);
		res.json(user);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
