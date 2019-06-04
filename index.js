const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const newUploadService = require('./services/NewUploadService').default;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/health', async (req, res) => {
    res.send("Health check: Main API active.");
});

app.post('/', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/upload', async (req, res) => {
    console.log(req.body);
    res.send(await newUploadService.newVideoUpload());
});

app.listen(process.env.PORT || 5000);
console.log("Api running");