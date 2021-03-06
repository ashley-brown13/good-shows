const express = require('express');
const {asyncHandler} = require('../utils');
const db = require('../../db/models');
const router = express.Router();




router.delete('/api/reviews/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const review = await db.Review.findByPk(req.params.id);
  if(review){
    await review.destroy();
    return res.json({success: "success"})
  }else {
    const error = new Error('Review does not exist');
    return next(error)
  }
}));

router.patch('/api/reviews/:id(\\d+)/', asyncHandler(async (req, res, next) => {
  const {title , comment} = req.body;
  const review = await db.Review.findByPk(req.params.id);
  if(review){
    await review.update({title, comment})
    return res.send({success: 'success'})
  }else{
    return next(error)
  }

}))


module.exports = router
