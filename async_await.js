function sayHi(){
    console.log("hello!!!");   // returns hello
}

// use async key word
async function sayHello(){
    console.log("Hi Coders");      // does not return Hi, returns promise
}

// to get Hi returned, use .then(), and then in console call the function
sayHello().then(msg => console.log(msg));
/*
*/
// to throw an error
async function oops(){
    throw "BAD IDEA WASTING TIME TO LEARN CODING"
}
  //;  // this does not return anything due to the use of throw key word. throw goes with .catch and return goes with .then()
oops().then(msg => console.log(msg)) 
.catch(err => console.log("inside catch", err));