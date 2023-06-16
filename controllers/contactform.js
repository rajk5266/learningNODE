exports.form = (req, res, next) =>{
    res.render('contactus', {
        pageTitle: 'contactUS',
        path: '/admin/contactus',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

// exports.submitForm = (req, res, next) =>{
//     console.log(req.body);
//     // res.redirect('/admin/sucess')
// }