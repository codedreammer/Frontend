let marks = [45, 67, 89, 32, 76, 90];

let passed = marks.filter(mark => mark >= 50);          
let withBonus = passed.map(mark => mark + 5);           
let average = withBonus.reduce((sum, m) => sum + m, 0) / withBonus.length;

console.log("Passed:", passed);
console.log("With Bonus:", withBonus);
console.log("Average:", average);

let marks = [10,60,40,50,90];