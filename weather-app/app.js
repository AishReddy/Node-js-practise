const request =require('request')
const geolocation=require('./utils/geolocataion')
const forecast=require('./utils/forecast')

let place=(process.argv[2])

/*  one approach
geolocation('Los Angeles',(error,response)=>
{
    console.log('Error:'+error)
    console.log("the geoforecast response: "+ JSON.stringify(response))
})

forecast(-118.2439,34.0544,(error,response)=>{
    console.log('Error '+error)
    console.log('the forecast response: '+JSON.stringify(response))
})*/
//second approach
geolocation(place,(error,{latitude,longitude,place_name})=>
{   if(error)
   return  console.log('Error '+error)
   else if(!place )
   return console.log("please provide a valid place")
//console.log(response.place_name)
console.log(place_name)
//forecast(response.latitude,response.longitude,(error,data)=>{
    forecast(latitude,longitude,(error,data)=>{
   if(error)
   return  console.log('Error '+error)
    console.log('the forecast response: '+JSON.stringify(data))
})
    
}) 

