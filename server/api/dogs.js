const router = require('express').Router()
const { models: { Dog }} = require('../db')
module.exports = router

router.get('/', async (req,res,next) => {
  try{
    const dogs = await Dog.findAll()
    res.send(dogs)
  }catch(err){
    next(err)
  }
})
