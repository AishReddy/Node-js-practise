const request =require('request')
const geolocation=require('./utils/geolocataion')
const forecast=require('./utils/forecast')
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
geolocation('Los Angeles',(error,response)=>
{    
console.log(response.place_name)
forecast(response.latitude,response.longitude,(error,data)=>{
   
    console.log('Error '+error)
    console.log('the forecast response: '+JSON.stringify(data))
})
    
}) 

