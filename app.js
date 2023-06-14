const path = require('path')
const express = require('express');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const contactRoutes = require('./routes/contactus.js')

const bodyParser = require('body-parser');

const app = express()
// app.use(json({}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use('/admin' , contactRoutes)
app.get('/success' , (req, res, next) =>{
  res.send('Form filled successfully!')
  res.end()
  // console.log("req")
})

app.use((req, res, next) =>{
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(4000)