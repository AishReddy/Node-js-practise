const request=require('request')

const forecast=(latitude,longitude,callback)=>
{
    const url='https://api.darksky.net/forecast/2347acbf2d3c795d709d5b3626982c3a/'+longitude+','+latitude;
    //request({url:url,json:true},(error,response)=>{
        request({url,json:true},(error,{body})=>{
        if(error)//low level
            callback('unable to connect to webservice')
       // else if(response.body.error) //which the webservice throws
        else if(body.error) //which the webservice throws
           callback('Give the correct location!!')
        else{
            callback(undefined,{temperature:  body.currently.temperature,
                                precipiation: body.currently.precipProbability
            })
        }
})
}

module.exports=forecast