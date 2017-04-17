var express = require("express");
var app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

var mongodb = require("mongodb");
const url = "mongodb://localhost:27017/test";
var MongoClient = mongodb.MongoClient;


app.use(express.static(__dirname + "/public"));
app.use("/node_modules", express.static((__dirname + "/node_modules")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/ajax/test/getData", function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('error occurred');
            return;
        }
        var collection = db.collection('redux_sport');
        collection.find({}).toArray(function (e, items) {
            if (e) {
                console.log("not found");
                return;
            }
            res.send(items);
        });
        db.close();
    });

    /*
    res.send([
        {
            team: "vikings"
        },
        {
            team: "magic"
        }
    ])*/

});

app.post("/ajax/test/postData", function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log("error occurred");
            return;
        }
        var collection = db.collection("redux_sport");
        collection.insertOne({
            team: req.body.team
        }, function (e, feedback) {
            if (e) {
                console.log("add error");
                return;
            }
            res.send({
                success: "added item"
            });
        });
        db.close();
    })
});


app.listen(4000, function () {
    console.log("redux app working");
});