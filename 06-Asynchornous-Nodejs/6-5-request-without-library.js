
const http = require('https');

const url='https://api.darksky.net/forecast/2347acbf2d3c795d709d5b3626982c3a/40,-70'


const request=http.request(url,(response)=>
{let data=''

    response.on('data',(chunk)=> //for each chunk of data or full data it is going to be executed
    {//when data comes  
     //chunk is the buffer
     //console.log(chunk.toString()) //in plain  text
       data=data+chunk.toString()
     // console.log(data)//in plain text
        console.log(chunk)
        /*
        <Buffer 7b 22 6c 61 74 69 74 75 64 65 22 3a 34 30 2c 22 6c 6f 6e 67 69 74 75 64 65 22 3a 2d 37 30 2c 22 74 69 6d 65 7a 6f 6e 65 22 3a 22 41 6d 65 72 69 63 61 ... >
<Buffer 37 30 2e 35 31 2c 22 68 75 6d 69 64 69 74 79 22 3a 30 2e 38 39 2c 22 70 72 65 73 73 75 72 65 22 3a 31 30 31 31 2e 37 37 2c 22 77 69 6e 64 53 70 65 65 ... >
        
        */
    })
    response.on('end',()=> //after we got the response we need to do this 
    {
        console.log(JSON.parse(data))
    })
})

//we have to figure out how to  convert the data to json and access it


//for error handling
request.on('error',(error)=>
{
    console.log('error'+error)
})
request.end()