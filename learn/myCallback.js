const numbers =[1,4,6,7,9];

const tableRows =numbers.map((n)=>"<tr<"+n+"</tr>");
console.log(tableRows.join(""));

function myMap(arr,cb){// creating a function that passes a callback
 let newArr = [];  
 for(let i=0; i<arr.length;i++){
   newArr.push(cb(arr[i]));//pushing the callback which take as single argument i which pass the          
 }
 return newArr;
}
let returnArr= myMap(numbers,n =>"<tr<"+n+"</tr>");
console.log(returnArr.join(""));