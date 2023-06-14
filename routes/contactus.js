const path = require('path')
const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();



  router.get('/contactus', (req, res, next) =>{
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'))
  })
  router.post('/contactus', (req, res, next) =>{
    // console.log('contact post method is working')
    // res.end(sucess)
    res.redirect('/success')
  })

  module.exports = router