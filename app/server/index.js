const express = require('express');
const fetch = require('node-fetch');
const app = express();
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient;
var db;


mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err) throw err;
    db = client.db('test');
});

app.use(cors());


app.get('/add',async(req,response)=>{

    const api_url = `https://raw.githubusercontent.com/attainu-falcon/falcon-course-module/master/assignments/data/airports.json`
    try {
        const result = await fetch(api_url);
        const json = await result.json();
        console.log(json);
        
        db.collection('airports').insertMany(json.airports,(err,res)=>{
            if(err) throw err;
            return response.send("insert success"+res.insertedCount);
        })
    
    } catch (error) {
        console.log(error)
    }

})


app.get("/airports/:city" , (req,res)=>{
    db.collection('airports').find({'city_name':req.params.city}).toArray((err,result)=>{
        if(err) throw err;
        res.json(result);
    })
}) 

app.get("/cities" , (req,res)=>{
    db.collection('airports').distinct("city_name",(err,result)=>{
        if(err) throw err;
        res.json(result);
    })
})


app.listen(8000,()=>{
    console.log("server running at port number 8000...")
});