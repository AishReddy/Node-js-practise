const request=require('request')

const forecast=(latitude,longitude,callback)=>
{
    const url='https://api.darksky.net/forecast/2347acbf2d3c795d709d5b3626982c3a/'+longitude+','+latitude;
    request({url:url,json:true},(error,response)=>{
        if(error)//low level
            callback('unable to connect to webservice')
        else if(response.body.error) //which the webservice throws
           callback('Give the correct location!!')
        else{
            callback(undefined,{temperature:  response.body.currently.temperature,
                                precipiation: response.body.currently.precipProbability
            })
        }
})
}

module.exports=forecast