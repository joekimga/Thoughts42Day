
let express = require('express');
let routes = express.Routes();


routes.get("/api/thoughttank", function (req, res) {
    res.send(`Hello World`);

    });



// routes.post("/api/thoughts/", function(req, res) {
//     thoughts.insertOne(req.body.thought_name, function(){
//         res.redirect('/');
//     });
// });
//
//
// app.get("/enterprise", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/enterprise.html"));
//
// });
//
// routes.post("/api/enterprise/", function(req, res) {
//     thoughts.insertOne(req.body.creative_name, function(){
//         res.redirect('/');
//     });
// });
//
//
// routes.post("/api/enterprise/create/:id", function(req, res) {
//     thoughts.updateOne(req.params.id, function(){
//         res.redirect('/');
//     });
// });
//
//
// routes.post("/api/archive/thought/:id", function(req, res) {
//     thoughts.updateOne(req.params.id, function(){
//         res.redirect('/');
//     });
// });
//

//Export the routes
module.exports = routes;