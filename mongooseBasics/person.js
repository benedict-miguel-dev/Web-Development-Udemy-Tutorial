const { default: mongoose } = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp', {useUnifiedTopology:true}).
    then(() => {
        console.log("Connected to Database")
    }).
    catch(error => {
        console.log("Could not connect to Database")
        console.log(error)
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})
 
personSchema.pre('save', async function () {    
    console.log('About to Save')
})

personSchema.post('save', async function () {    
    console.log('About to Save')
})

const Person = mongoose.model('Person', personSchema)