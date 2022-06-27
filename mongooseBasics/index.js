/* Getting mongoose and connecting to mongoose */
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/moviesApp', {useUnifiedTopology:true}).
    then(() => {
        console.log("Connected to Database")
    }).
    catch(error => {
        console.log("Could not connect to Database")
        console.log(error)
    });

const moveSchema = new Schema({
        title:String,
        year: Number,
        score: Number,
        rating: String
    })

const Movie = mongoose.model('Movie', moveSchema)

// const amadeus = new Movie({
//     title: 'Amadeus',
//     year:  1986,
//     score: 9.2,
//     rating: 'R'
// })
/* Inserting Many */
// Movie.insertMany([
//     {title: 'Amelie', year:2001, score: 8.3, rating: 'R'},
//     {title:'Alien', year: 1979, score: 8.1, ratingL: 'R'},
//     {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
//     {title: 'Stand By Me', year: 1986, score: 8.6, rating:'R'},
//     {title: 'Moonrise Kingdom', year: 2021, score: 7.3, rating: 'PG-13'}
// ]).
//     then( (data)=> {
//         console.log('Entered: ', data)
//     })