const express = require('express');

const router = express.Router();

router.get( '/add-product', (req, res, next) =>{
    // console.log('in the another middleware')
    // responses we can send
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"> <input type="text" name="size" placeholder="Enter Size"> <button type="submit">Add Product</button></form>')
  })
  
  router.post('/add-product', (req,res,next) =>{
    console.log(req.body);
    res.redirect('/')
  })

  module.exports = router