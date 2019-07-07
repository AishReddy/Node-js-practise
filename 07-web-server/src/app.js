var express = require('express');
var app = express();
/*
app.get('/',(req,res)=>
{
    res.send("Hey welcome to Express!!")
})
*/

app.get('/',  (req, res) =>{
    res.send('Hello World');
 })

 app.get('/help', function (req, res) {
    res.send('Hey welcome to help page ');
 })

 app.get('/about', function (req, res) {
    res.send('<h2>Hey welcome to about page, How can i help you ? </h2>');
 })

 app.get('/weather', function (req, res) {
    res.send('Hey welcome to weather page ');
 })


 // to send the html response
 app.get('/html', function (req, res) {
    res.send('<h1>Hey welcome to weather page <h1>');
 })
 //to send json as the response

 //to send json objects as the response
 app.get('/jsonobject', function (req, res) {
    res.send(JSON.stringify([{
        name: 'Aishwarya',
        age: 'unknown'
    },
    {
    name: 'Vijay',
    age: 26  
}]))
})
app.get('/object', function (req, res) {
    res.send(JSON.stringify(
    {
       name: 'Aishwarya',
       age: 'unknown'
    }
  ))   
})

app.listen(3000,()=>
{
    //when the server starts 
    console.log('the node server has started at port:3000')
})
