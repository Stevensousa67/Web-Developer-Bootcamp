const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog.'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete ur account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.send('It worked!');
})

app.get('/tacos', (req, res) => {
    const { meat, qty } = req.query;
    res.send(`Here are your ${qty} ${meat} tacos.`);
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos.`);
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000');
})