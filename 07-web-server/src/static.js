var path=require('path')
var express = require('express');
var app = express();


const usingSomeName=path.join(__dirname,'../public')
//console.log(usingSomeName)
app.use(express.static(usingSomeName))


app.listen(3000,(req,res)=>
{
    //when the server starts 
    console.log('the node server has started at port:3000')
})
