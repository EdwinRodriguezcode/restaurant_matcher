const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const fileSys = require('fs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const PORT = 8080

'use strict';

app.get('/hungryusers', function(req,res){//declaring how to send user json  
    res.senfFile(path.join(__dirname + '/app/data', 'hungryusers.json'))
});

app.post('/hungryusers', function(req,res) {

    var newHungryuser  = req.body; //storingincoming JSON
    var hungryusersJSON = require('./app/data/hungryusers.json');


    var match;
    var matchScore = 100;

    for (var idx = 0; idx<hungyusersJSON.lenghth; idx++) {//outer looping through users
        var totalDiff = 0;
    for (var jdx=0; jdx<10; jdx++) {//inner loopin through scores
    totalDiff += Math.abs(newHungryuser.scores[jdx]-hungryusersJSON[idx].score[jdx])
}
if (totalDiff < matchScore) {//newn match found
matchScore = totalDiff
match = hungryusersJSON[idx];
}  

}
//pushing the new hungryuser into JSON
hungryusersJSON.push(newHungryuser);
fileSys.writeFile(path.join(__dirname + '/app/data', 'hungryusers.json'), JSON.stringify(hungryusers.JSON, null, 2), function(err){
    if (err) throw err;   
})

    res.json(match);//sending response
});
//this is the routs to the files
app.get('/survey', function (req,res) {

        res.sendFile(path.join(__dirname, `./app/public/survey.html`));//this is path to survey
});

app.get('/images/:image', function (req,res){
    res.sendFile(path.join(__dirname, `./app/public/matchPhotos/${req.params.image}`));
});

app.get('/css/:css', function (req,res) {
        res.sendFile(path.join(__dirname, `./app/public/css/${req.params.css}`));
});

app.get('/javascript/:javascript', function (req, res) {
    res.sendFile(path.join(__dirname, `./app/public/javascript/${req.params.javascript}`));
});



app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/index.html"));
});


app.listen(PORT, ()=> {
    console.log("App listening on http://localhost:" + PORT);
});









