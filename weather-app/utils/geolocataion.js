const request =require('request')

const geolocation=(address,callback)=>{

const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWlzaHdhcnlhMjUxMSIsImEiOiJjanhqNDE5NG0xd2tlM3FsNzFwNjF0MHk1In0.mt7kqN6-QzAnZKI3svzkMw'
request({url: url,json:true},(error,response)=>
{
    if(error)
    {
        callback('unable to connect to webservice')  
    }
    else if(response.body.features.length==0)
    { 
          callback('unable to find ther find results from the search keyword')
          
    } else{
      callback(undefined,{
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        longitude: response.body.features[0].place_name
    })
    }
})
}

module.exports =geolocation