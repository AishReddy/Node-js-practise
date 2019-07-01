const request =require('request')
const geolocation=require('./utils/geolocataion')

geolocation('Los Angeles',(error,response)=>
{
    console.log('Error:'+error)
    console.log("response: "+ JSON.stringify(response))
})