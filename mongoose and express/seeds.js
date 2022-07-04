const { response } = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useUnifiedTopology:true}).
    then(() => {
        console.log("Connected to Database")
    }).
    catch(error => {
        console.log("Could not connect to Database")
        console.log(error)
    });


const seedProducts =[
    {
        name: "Ruby GrapeFruit",
        price: 1.99,
        category: 'fruit'
    },
    {
        name: "Fairy Eggplant",
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: "Organic Goddess Melon",
        price: 4.00,
        category: 'fruit'
    }, {
        name: "Organic Mini Seedless Watermelon",
        price: 3.99,
        category: 'fruit'
    }, {
        name: "Organic Celery",
        price: 1.50,
        category: 'vegetable'
    }, {
        name: "Chocolate Whole Milk",
        price: 2.69,
        category: 'dairy'
    }    
 
]

Product.insertMany(seedProducts)
    .then (res =>{
        console.log(res)
    })
    .catch( err =>{
        console.log(err)
    })
// const p = new Product({
//     name: "Ruby GrapeFruit",
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then( data =>{
//         console.log(data)
//     })
//     .catch(err =>{
//         console.log(err)
//     })