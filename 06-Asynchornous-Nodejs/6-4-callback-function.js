
//console.log(data.latititude+" "+data.longitude)
const geoLocation=(location,callback)=>
{
    setTimeout(()=>
    {
        const data= {
            longitude: 0,
            latititude: 0
        }
       // 1.return data
       callback(data)
    },2000)
    
}
//for this case the function returns undefined since there is nothing we are returning from the function and node returns undefined if we don't define anything in the function
/*1.
const data=geoLocation('Australia')
console.log(data)
*/
//second case
 geoLocation('Australia',(data)=>
 {
     console.log(data)
 })
//challenge
const add=(num1,num2,callback)=>
{
setTimeout(()=>
{
    callback(num1+num2)
})
}
add(1,2,(data)=>
{
    console.log(data)
})