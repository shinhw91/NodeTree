const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// 코드 마지막에 위치
// module/module.js, js/promise.html 파일과 함께 확인하기!
module.exports = {
// export default {
    defNum : defaultNum,
    add,    // add : add
    minus,  // "minus" : minus 
    multi,
    divide
}