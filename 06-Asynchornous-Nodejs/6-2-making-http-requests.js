const request= require('request')

const url='https://api.darksky.net/forecast/2347acbf2d3c795d709d5b3626982c3a/37.8267,-122.4233?units=si'

request({url:url,json:true},(error,response)=>
{
    //console.log(response.body)
  /*  const data=JSON.parse(response.body)  
    console.log(data)
    console.log(data.currently)*/

   console.log('It is currently '+response.body.currently.temperature+' out. There is '+response.body.currently.precipProbability+'% chance of rain')
})

//challenge 
const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWlzaHdhcnlhMjUxMSIsImEiOiJjanhqNDE5NG0xd2tlM3FsNzFwNjF0MHk1In0.mt7kqN6-QzAnZKI3svzkMw'

request({url: url2,json:true},(error,response)=>
{
    console.log('the longtitude is '+response.body.features[0].center[0]+' and the latitude is '+response.body.features[0].center[1]);
})