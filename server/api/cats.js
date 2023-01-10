const router = require('express').Router()
const { models: { Cat }} = require('../db')
module.exports = router

router.get('/', async (req,res,next) => {
  try{
    const cats = await Cat.findAll()
    res.send(cats)
  }catch(err){
    next(err)
  }
})
