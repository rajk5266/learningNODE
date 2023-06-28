const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error.js')
const sequelize = require('./util/database.js')
const Product = require('./models/product.js')
const User = require('./models/user.js')

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const contactRoutes = require('./routes/contactus.js')
const SUCCESSroutes = require('./routes/successroutes.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) =>{
    User.findByPk(1)
    .then(user =>{
        req.user = user;
        next()
    })
    .catch(err => console.log(err))
})

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use('/admin' , contactRoutes)
app.use('/admin',SUCCESSroutes)
app.use(errorController.get404)

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
sequelize
//  .sync( {force: true})
 .sync( )
 .then(result => {
    return User.findByPk(1)
     })
     .then(user =>{
        if(!user){
            return User.create({name: 'raj', email: "dummyemail2h.com"})
        }
        return user;
     })
     .then(user =>{
        app.listen(4000)
     })
 .catch(err => console.log(err))


