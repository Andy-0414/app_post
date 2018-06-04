const express = require('express');
const app = express();
const bodyParser = require('body-parser') // POST

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/get', (req, res) => {
    console.log('Get');
    res.send({ "result": "Get" })
})
app.get('/get/:p', (req, res) => {
    console.log('Get P');
    res.send({ "result": "Get p: " + req.params.p })
})
app.post('/post', (req, res) => {
    console.log('Post');
    res.send({ "result": "Post" })
})

app.listen(3000, () => {

})