const router = require('express').Router();
const {
	models: { Cart, Pet },
} = require('../db');



router
  .route('/:id')
	.get(async (req, res, next) => {
		try {
			const pet = await Pet.findAll({where: {cartId: req.params.id}});
			if (!pet) {
				res.status(404).send({ message: 'Pet not found' });
				return;
			}
			res.send(pet);
		} catch (err) {
			next(err);
		}
	})

  .post(async (req, res, next) => {
		try {
			const cart = await Cart.create({userId: req.params.id});
			res.status(201).send(cart);
		} catch (err) {
			next(err);
		}
	});
  

module.exports = router;
