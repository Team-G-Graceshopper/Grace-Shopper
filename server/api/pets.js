const router = require('express').Router();
const {
	models: { Pet },
} = require('../db');

router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const pets = await Pet.findAll();
			res.json(pets);
		} catch (err) {
			next(err);
		}
	})
	.post(async (req, res, next) => {
		try {
			const pet = await Pet.create(req.body);
			res.status(201).send(pet);
		} catch (err) {
			next(err);
		}
	});

router
	.route('/:id')
	.delete(async (req, res, next) => {
		try{
			const pet = await Pet.findByPk(req.params.id)
			res.send(await pet.destroy())
		}catch(err){
		next(err)
		}
	})
	.get(async (req, res, next) => {
		try {
			const pet = await Pet.findByPk(req.params.id);
			if (!pet) {
				res.status(404).send({ message: 'Pet not found' });
				return;
			}
			res.send(pet);
		} catch (err) {
			next(err);
		}
	})
	.put(async (req, res, next) => {
		const pet = await Pet.findByPk(req.params.id);
		if (!pet) {
			res.status(404).send({ message: 'Pet not found' });
			return;
		}
		res.send(await pet.update(req.body));
	});


module.exports = router;
