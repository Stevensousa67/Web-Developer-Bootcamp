const express = require('express');
const app = express();


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing PostID ${postID} in the ${subreddit} subreddit.`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched.');
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`);
    }
})

app.get('/cats', (req, res) => {
    res.send('MEOW!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
})

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('*', (req, res) => {
    res.send('Unknown Page');
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
})