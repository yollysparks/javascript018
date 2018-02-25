var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik', 'Yol'];

const result = names.filter(name => name.length <= 3);

console.log(result);

//using map method to create a new array with names to uppercase
const tableRows =names.map((n)=>"<ul><li>"+n+"</li></ul>");
console.log(tableRows.join("").toUpperCase());