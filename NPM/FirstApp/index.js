const express = require('express');
const app = express();

/* Express takes an http request and turns it into an object. Normally http does not have any assciated state in any language so you have to turn it into something usable */
/* app.use ((req, res) => {
console.log('WE GOT A REQUEST');
 res.send('Hello we got your request');
res.send('<h1>This is my webpage!</h1>');
}) */

//Root request
app.get('/', (req, res) => {
    res.send('You made it to my home page');
})

//template path example
app.get('/r/:subreddit/:postid', (req, res) =>{
    //Youc an extract this from the object that express makes from the request. 
    const {subreddit, postid} = req.params;
    res.send(`Veiwing ${postid} in ${subreddit} subreddit`);
})

//POST example
app.post('/cats', (req, res) => {
    res.send('POST Request to cats');
})

//second request page
app.get('/cats', (req, res) => {
    res.send('<h1>Cat Im a kitty cat</h1>');
})

//Third request page
app.get('/dogs', (req, res) => {
    res.send('<h1>I am a dog</h1>');
})

//query string example
app.get('/search', (req, res) => {
    const {q} = req.query;
    if (!q) {
         res.send('Nothing found if nothing searched.');
    }
    res.send(`You are searching for ${q}`);
})


//Generic request for all paths, you can't have more than one send per request. Routs will win by order in file. 
//This is the catch all. Nothing should really go below it since order matters here.
app.get('*', (req, res) =>{

    res.send('You are Generic');
})




/* you can't have mutiple servers running on the same port */
app.listen(3000, () => {
    console.log('listening on port 3000');
})
 

//Use Nodemon to run the server instead of just Node. in the terminal
// nodemon index.js