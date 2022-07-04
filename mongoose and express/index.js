/* 
    Setting required Packages 
*/
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
/* 
    Importing models 
*/
const Product = require('./models/product');
/*
    Setting up Express and Mongoose
*/
mongoose.connect('mongodb://localhost:27017/farmStand', { useUnifiedTopology: true }).
    then(() => {
        console.log("Connected to Database")
    }).
    catch(error => {
        console.log("Could not connect to Database")
        console.log(error)
    });
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
/* 
    Setting Server Paths
*/

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })

})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    const { id } = await newProduct.save()
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', { product })
})



app.listen(3000, () => {
    console.log('Server started on port 3000')
})


