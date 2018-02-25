import { error } from "util";

let promiseFactory = function(msg,delay) {//created a function called promiseFactory which takes another function which takes a delay and message(msg)promise
    return new Promise((resolve, reject)=> {//creating a new promise which takes callback function with resolve and reject
      setTimeout(()=> { //To demonstrate an async call
        var ok = true;  // simulates the result of the operation
        if (ok) {
          resolve(msg);
        }
        else {
          reject("UPPPPs");
        }
      }, delay);
    });
  };
  
  let p = promiseFactory("Msg from Promise",1000); //wait for a second then resolves the msg given
  let result =[];
   p.then(data=>{
   result.push(data);
   return promiseFactory("Hello class",3000);
   })
   .then(data=>{
    result.push(data);
    return promiseFactory("Hi class",2000);
    })
   .then(data=>{
    result.push(data);
    console.log(result.join("/n"));
   })
   .catch(err=> console.log("error:"+ err));