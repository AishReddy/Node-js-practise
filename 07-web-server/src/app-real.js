var path=require('path')
var express = require('express');
var app = express();

console.log(__dirname)//directory name 
console.log(__filename)//file name 
/*
/Users/paishwa/Desktop/nodejs-practise/07-web-server/src
/Users/paishwa/Desktop/nodejs-practise/07-web-server/src/app-real.js
*/
/*
console.log(path.join(__dirname,'../public'))
/Users/paishwa/Desktop/nodejs-practise/07-web-server/public
*/
 
const usingSomeName=path.join(__dirname,'../public')
app.use(express.static(usingSomeName))


app.listen(3000,()=>
{
    //when the server starts 
    console.log('the node server has started at port:3000')
})
