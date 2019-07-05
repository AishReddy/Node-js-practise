const product={
    label : 'White teashirt',
    price : 3,
    stock: 400
}
/*
 const label=product.label
 const stock=product.stock
 console.log(label+" "+stock)
*/

 const {label,stock,lol=5} =product
 //if we set up it won't be used
 console.log(label+" "+stock)

 const {price:rename}=product
 console.log(rename)
 //White teashirt 400



 //destructure without having control to everything
 const trans=(name,
    {label})=>
 {
     console.log("i am the label "+label)
 }
 trans('something',product)