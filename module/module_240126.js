// module
// const {defNum, add} = require('./calculator.js');
const cal = require('./calculator.js')

// *Node.js 미지원 문법(import, export)
// import cal from 'calculator';

// console.log(defNum, add(1, 2));
console.log(cal.defNum, cal.add(1, 2));