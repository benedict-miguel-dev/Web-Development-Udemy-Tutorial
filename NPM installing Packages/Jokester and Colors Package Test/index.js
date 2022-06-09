/*
    Importing Packages, import with a variable name and use using variable
    const packageName = require(packageName)

    Can also be imported using 
    import { getRandomDadJoke } from 'give-me-a-joke';
    import colors from 'colors';
*/

const jokes = require('give-me-a-joke');
const colors = require('colors');

jokes.getRandomDadJoke( (joke)=> {
    console.log("\n",joke.red,"\n")
})
