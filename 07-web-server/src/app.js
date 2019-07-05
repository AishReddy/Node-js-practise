var express = require('express');
var app = express();
/*

app.get('/',(req,res)=>
{
    res.send("Hey welcome to Express!!")
})*/
app.get('/',  (req, res) =>{
    res.send('Hello World');
 })

 app.get('/help', function (req, res) {
    res.send('Hey welcome to help page ');
 })

 app.get('/about', function (req, res) {
    res.send('Hey welcome to about page, How can i help you ? ');
 })

 app.get('/weather', function (req, res) {
    res.send('Hey welcome to weather page ');
 })

 app.listen(3000,()=>
 {
     //when the server starts 
     console.log('the node server has started at port:3000')
 })