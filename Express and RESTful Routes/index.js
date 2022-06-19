const express = require('express');
const app = express();
const path= require('path')
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
/* Implement additional methods other than POST and GEt */
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'/views'))
/* Setting the server to be able to handle urlencoded data */
app.use(express.urlencoded({extended: true}))
app.use(express.json())
let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'That is so funny'
    },
    {
        id: uuidv4(),
        username: 'Benedict',
        comment: 'I like programming'
    },
    {
        id: uuidv4(),
        username: 'Dalena',
        comment: 'What is the meaning of life?'
    },
    {
        id: uuidv4(),
        username: 'Jake',
        comment: 'I love cars'
    }
    
]
/*
    /comments               GET         Get all all comments
    /comments/new           GET         Form to create a new comment
    /comments               POST        Creates a new comment on server
    /comments/:id           GET         Details for one specific comment
    /comments/:id/edit      GET         Form to edit Specifict Comment
    /comments/:id           PATCH       Updates specific comment on server
    /comments/:id           DELETE      Deletes specific item on server
*/
app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments})
})

app.post('/comments', (req,res)=>{
    /* Retrieve the data */
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuidv4()})
    /* Redirect to comments */
    res.redirect('/comments')
})

app.get('/comments/new', (req, res)=>{
    res.render('comments/new')
})

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c =>  c.id === id)
    res.render('comments/show', {comment})
})

app.patch('/comments/:id', (req,res)=>{
    const {id}= req.params
    const newComment = req.body.comment
    const foundComment = comments.find(c =>  c.id === id)
    foundComment.comment = newComment;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req,res)=>{
    const {id}= req.params
    comments = comments.filter( c => c.id!==id)
    res.redirect('/comments')
})
app.get('/comments/:id/edit', (req,res)=>{
    const {id}= req.params
    const comment = comments.find(c =>  c.id === id)
    res.render('comments/edit', {comment})
})

app.get('/tacos', (req, res)=>{
    res.send("Get Response")
} )

app.post('/tacos', (req,res)=>{
    console.log(req.body)
    res.send("Post response")
})

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('*', (req,res)=>{
    res.send('Invalid Page')
})
app.listen(3000, () =>{
    console.log("Listening on port 3000")
})

