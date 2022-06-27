/* Getting mongoose and connecting to mongoose */
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/shopApp', {useUnifiedTopology:true}).
    then(() => {
        console.log("Connected to Database")
    }).
    catch(error => {
        console.log("Could not connect to Database")
        console.log(error)
    });


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

const Product = mongoose.model('Product', productSchema);
const bike = new Product({
     price: 500
})

bike.save()
    .then( data=> {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })