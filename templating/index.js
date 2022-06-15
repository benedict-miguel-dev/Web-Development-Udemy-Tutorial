const express = require('express')
const { join } = require('path')
const app = express()
const path= require('path')
const { allowedNodeEnvironmentFlags } = require('process')
const redditData = require('./data.json')
/* Serving Static Files*/
app.use(express.static('public'))
/* Set express to use EJS */
app.set('view engine', 'ejs')
/* Configure it to use the proper views folder*/
app.set('views', path.join(__dirname,'/views'))
app.set('public', path,join(__dirname,('/public')))

app.get(('/'),(req,res) => {
    res.render('home.ejs')
}) 

app.get('/rand', (req,res)=> {
    const num =  Math.floor(Math.random() * 10) + 1
    /* Pass to the random.ejs, the number can now be accessed as rand in random.ejs*/
    res.render('random', {num:num})
})

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params
    const data = redditData[subreddit]
    console.log(data)
    res.render('subreddit',{...data})
}),

app.get('/cats', (req,res) => {
    const cats= [
        'blue', 'rocket', 'monty','stephanie', 'winston'
    ]
    res.render('cats', {cats})
})

app.get('*',(req, res)=> {
    res.send('Undefined Page')
})
app.listen(3000, () => {
    console.log('Listening on port 3000')
})