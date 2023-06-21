const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error.js')

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const contactRoutes = require('./routes/contactus.js')
const SUCCESSroutes = require('./routes/successroutes.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use('/admin' , contactRoutes)
app.use('/admin',SUCCESSroutes)
app.use(errorController.get404)


app.listen(4000)