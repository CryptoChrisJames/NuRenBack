const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');

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
    const result = await newVideoUpload(req.body);
    res.send(result);
});

const newVideoUpload = async (data) => {
    const videos = await loadNewVideoEvents();
    const keys = await loadNewVideoKeys();
    await videos.insertOne({
        name: JSON.stringify(data),
    });
    await keys.insertOne({
        key: data.Records[0].s3.object.key,
    });
    return "Uploaded Successfully.";
};

const loadNewVideoEvents = async () => {
    const client = await mongodb.MongoClient.connect
    ('mongodb://ObsidianTech:Obsidian12!@ds131737.mlab.com:31737/nurenqa1', {
        useNewUrlParser: true
    });
    return client.db('nurenqa1').collection('newvideoevents');
};

const loadNewVideoKeys = async () => {
    const client = await mongodb.MongoClient.connect
    ('mongodb://ObsidianTech:Obsidian12!@ds131737.mlab.com:31737/nurenqa1', {
        useNewUrlParser: true
    });
    return client.db('nurenqa1').collection('nurenvideokeys');
};

app.listen(process.env.PORT || 80);
console.log("Video Upload Api running");