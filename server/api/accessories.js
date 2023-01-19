const router = require('express').Router();
const {
	models: { User, Pet },
} = require('../db');
const UserAcc  = require('../db/models/UserAcc')
const Accessorie = require('../db/models/Accessorie')

router
	.route('/')
	.get(async (req, res, next) => {
		try {
			const accessories = await Accessorie.findAll();
			res.send(accessories);
		} catch (err) {
			next(err);
		}
	})

router
	.route('/:id')
  .delete(async (req, res, next) => {
    try{
      const accesorie = await Accessorie.findByPk(req.params.id)
      res.send(await accesorie.destroy())
    }catch(err){
      next(err)
    }
  })
	.get(async (req, res, next) => {
		try {
			const accessorie = await Accessorie.findByPk(req.params.id);
			if (!accessorie) {
				res.status(404).send({ message: 'Pet not found' });
				return;
			}
			res.send(accessorie);
		} catch (err) {
			next(err);
		}
	})
	.put(async (req, res, next) => {
		const accessorie = await Accessorie.findByPk(req.params.id);
		if (!accessorie) {
			res.status(404).send({ message: 'Pet not found' });
			return;
		}
		res.send(await accessorie.update(req.body));
	})
  
  .post(async (req, res, next) => {
    const user = await User.findByPk(req.body.userId)
    const accessorie = await Accessorie.findByPk(req.body.accessorieId)
    res.send(user.addAccessorie(accessorie))
  })

  router
	.route('/cart/remove/:id')
  .put(async (req, res, next) => {
    const user = await User.findByPk(req.body.userId)
    const accessorie = await Accessorie.findByPk(req.body.accessorieId)
   res.send(user.removeAccessorie(accessorie))
  })

  router
	.route('/cart/quantity/:id')
  .get(async (req, res, next) => {
    const assocciation = await UserAcc.findAll({
      where: 
      {
        userId: req.body.userId, 
        accessorieId: req.body.accessorieId
      }
    })
    res.send(assocciation)
  })
  .put(async (req, res, next) => {
    const assocciation = await UserAcc.findAll({
      where: 
      {
        userId: req.body.userId, 
        accessorieId: req.body.accessorieId
      }
    })
    res.send(await assocciation[0].update(req.body));
  })

  router
	.route('/cart/accessories/:id')
  .get(async (req, res, next) => {
    const assocciation = await User.findAll({
      where: 
      {
        id: req.params.id, 
      },
      include: Accessorie
    })
    res.send(assocciation)
  })


module.exports = router;
