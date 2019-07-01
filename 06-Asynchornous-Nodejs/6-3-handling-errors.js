const request =require('request')

const url='https://api.darksky.net/forecast/2347acbf2d3c795d709d5b3626982c3a/37.8267,-122.4233'

request({url:url,json:true},(error,response)=>{
if(error)//low level
{
    console.log('unable to connect to webservice')
}
else if(response.body.error) //which the webservice throws
{
    console.log('Give the correct location!!')
}
else{
    console.log('It is currently '+response.body.currently.temperature+' out. There is '+response.body.currently.precipProbability+'% chance of rain')
}
})

//challenge
const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWlzaHdhcnlhMjUxMSIsImEiOiJjanhqNDE5NG0xd2tlM3FsNzFwNjF0MHk1In0.mt7kqN6-QzAnZKI3svzkMw'
const urlfail2='https://api.mapbox.com/geocoding/v5/mapbox.places/dflilj.json?access_token=pk.eyJ1IjoiYWlzaHdhcnlhMjUxMSIsImEiOiJjanhqNDE5NG0xd2tlM3FsNzFwNjF0MHk1In0.mt7kqN6-QzAnZKI3svzkMw'
request({url: urlfail2,json:true},(error,response)=>
{if(error)
    {
        console.log('unable to connect to webservice')  
    }
    else if(response.body.features.length==0)
    { 
          console.log('unable to find ther find results from the search keyword')
          
    } else{
      console.log('the longtitude is '+response.body.features[0].center[0]+' and the latitude is '+response.body.features[0].center[1]);
    }
})