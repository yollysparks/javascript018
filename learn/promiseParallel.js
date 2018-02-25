let promiseFactory = function(msg,delay) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> { 
        var ok = true;  
        var err ="UUPS";
        if(msg="a"){
            ok= false;
            err ="you did something wrong";
        }
        if (ok) {
          resolve(msg);
        }
        else {
          reject("UPPPPs");
        }
      }, delay);
    });
  };
  let p1 = promiseFactory("Msg from Promise",1000); 
  let p2 = promiseFactory("Hello world",3000);
  let p3 = promiseFactory("Hi class",4000);
  let p4 = promiseFactory("Promises",1000);
  Promise.all([p1,p2,p3,p4])
  .then(data=>{
    console.log(data.join("/n").toUpperCase());
  })
  .catch(err=>console.log("Error"+ err))