const router = require('express').Router();
const {
	models: { Order },
} = require('../db');


router
	.route('/')
	.get(async (req, res, next) => {
		try{
			const orders = await Order.findAll()
			res.send(orders)
		}catch(err){
			next(err)
		}
	})
	.post(async (req, res, next) => {
		try {
			const order = await Order.create(req.body)
			res.send(order);
		} catch (err) {
			next(err);
		}
	})

router
	.route('/:id')
	.delete(async (req, res, next) => {
		try{
			const order = await Order.findByPk(req.params.id)
			res.send(await order.destroy())
		}catch(err){
		next(err)
		}
	})
	.get(async (req, res, next) => {
		try {
			const order = await Order.findByPk(req.params.id);
			if (!order) {
				res.status(404).send({ message: 'Pet not found' });
				return;
			}
			res.send(order);
		} catch (err) {
			next(err);
		}
	})

	module.exports = router
