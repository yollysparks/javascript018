const fs = require("fs");
const fileName= process.argv[2];

console.log("before");
const content = fs.readdirSync(fileName);
console.log("after");
console.log(content.toLocaleString());
const data=content.toLocaleString();
console.log("number of lines"+data.split("/n").length); 

console.log("before");
fs.readFile(fileName,(err,data)=>{
if (err){
    throw err;
}
console.log("number of lines"+data.split("/n").length); 
})
console.log("after");