const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
    res.send("Hello from the other side");
});

app.post('/', async (req, res) => {
    console.log(req.body);
    res.send( req.body);
});
//app.use('/api/tracks', tracks);

app.listen(process.env.PORT || 80);
console.log("Api running on port " + process.env.PORT);