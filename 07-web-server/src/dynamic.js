var path=require('path')
var express = require('express');
var app = express();


app.set('view engine', 'hbs');
//setting the dynamic views location
app.set('views', path.join(__dirname, '../views'));

app.get('/',(req,res)=>
{
    res.render('index')
})

app.get('/help',(req,res)=>
{
    res.render('help',{
        weather : 'its  cold in here',
        creator: 'Aishwarya'
    })
})

//the server spinning up
app.listen(3000,(req,res)=>
{
    //when the server starts 
    console.log('the node server has started at port:3000')
})
