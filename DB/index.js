const model=require("./model/suggestion");

const express=require('express');

const app=express();

const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017");

app.listen(80);

app.get('/', async function(req, res){
    const title=req.params.title
    const content=req.params.content
    res.json(await model.find({title, content}));
});

app.get('/put', async function(req, res){
    new model({title: req.query.title, content: req.query.content}).save();
});