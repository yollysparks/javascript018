//map&join
var names = [{name:"Lars",phone:"1234567"}, 
             {name: "Peter",phone: "675843"},
             {name: "Jan", phone: "98547"},
             {name: "Bo", phone: "79345"}];
var reformatedArray = names.map(obj=>{
    var reformatObj ={};
    reformatObj[obj.key]= obj.value;
    return reformatObj;
})
console.log(names.join(""));