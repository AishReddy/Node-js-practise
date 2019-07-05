//if the name and the assignee name are same then the variable itself is sufficient represent


const name='Aishwarya'
const myAge=23
/*
const  User={
    name: name,
    age: myAge
}*/
const User={
    name,
    age:myAge
}
console.log(User)
//{ name: 'Aishwarya', age: 23 }