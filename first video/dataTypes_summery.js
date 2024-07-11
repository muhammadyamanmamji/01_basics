// Primitive

// 7 types: string , symbol , number , null , boolearn , bigInt , Undefined

// Refenrance (Non primitive)

// Array , object , Function



// const score = 100
// const sooreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId =Symbol('123')


// console.log(id === anotherId);


// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name:"yamanm",
//     email:"yamanmamji2003@gmail.com",
//     age:20,
//     location:"new karachi sector 11/f  ",

// }


// let  fung = function() {
    
// }

// console.log(fung);

// console.log(typeof myObj);

// console.log(typeof heros);


// console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive)    heap(Non-primitive)


let myname  = "yaman"
let newOne =  myname
newOne = "yaman mamji"
console.log(myname);
console.log(newOne);




let userOne = {
    name:"yaman",
    email:"yaman@gmail.com",
    pass:"yaman123",
}

console.log(userOne);

let userTow = userOne

userTow.email = "yamammamji@gamail.com"

console.log(userTow);
console.log(userOne);

