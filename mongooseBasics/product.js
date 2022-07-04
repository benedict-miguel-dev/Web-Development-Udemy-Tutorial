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
        required: true,
    },
    price: {
        type: Number,
        min: [0, 'Price must be positive'],
        default: 0
    },
    onSale: {
        type:Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save()
}

productSchema.methods.addCategory = function (category){
    this.categories.push(category)
    return this.save()
} 
// productSchema.methods.greet = function () {
//     console.log(`Found: ${this.name}`)
// }

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);



// const findProduct = async () =>{
//     const foundProduct = await Product.findOne({name: "Bitke Helme"})
//     console.log(foundProduct)
//     await foundProduct.toggleOnSale()
//     console.log(foundProduct)
//     await foundProduct.addCategory('Safety')
//     console.log(foundProduct)
// }

// findProduct();

Product.fireSale()
    .then( res=>{
       console.log(res)
        }
    )
        
    

// const bike = new Product({
//     name: "Mountain Bike",
//     price: 19.50
// })
// bike.save()
//     .then( data=> {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Product.findOneAndUpdate({name: "Tire Pump"}, {price : -10.99},{new : true, runValidators: true})
//     .then( data => {
//         console.log(data)
//     }).catch( err => {
//         console.log(err)
//     })