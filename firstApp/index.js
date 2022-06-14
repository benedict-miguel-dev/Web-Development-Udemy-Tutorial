const express = require("express")
// initialize the server
const app = express()
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
/* 
    Remember that we can only send once 
    These paths have to be exact paths, or else path '*' is read instead
*/

/* Defining Paths */
app.get('/', (req, res) => {
    res.send("Home Directory!")
})

app.get('/cats', (req, res) => {
    res.send("Get request Cat")
})

app.post('/cats', (req, res) => {
    res.send('Post request Cat')
})

app.get('/dogs', (req, res) => {
    res.send("Get request Dog")
})

app.post('/dogs', (req, res) => {
    res.send('Post request Dog')
})

/* Defining generic patterns*/
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    console.log(req.params)
    res.send(`This is the subreddit for ${subreddit}`)
})

/* Defining queries */
app.get('/search', (req, res) => {
    const { q } = req.query;
    console.log(req.query)
    res.send(`Contains queries ${q}`)
})
/* Defining an undefined Path */
app.get('*', (req, res) => {
    res.send('Undefined Path')
})


