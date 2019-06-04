const mongodb = require('mongodb');

const newVideoUpload = async () => {
    const videos = await loadNewVideoEvents();
    await videos.insertOne({
        name: "Testin this good shit.",
      });
    return "Check it!";
};

const loadNewVideoEvents = async () => {
    const client = await mongodb.MongoClient.connect
    ('mongodb://ObsidianTech:Obsidian12!@ds131737.mlab.com:31737/nurenqa1', {
        useNewUrlParser: true
    });
    return client.db('nurenqa1').collection('newvideoevents');
};

module.exports =  {
    newVideoUpload,
};