function multiply() {
    let num1 = 31
    return num1 * 2;
}
  
function random() {
    return Math.random() * 100 + 1;
}
  
function mod() {
    let num3 = 10
    return num3 % 6
}
  
function max() {
    return Math.max.apply(null, [12, 11, 20]);
}

console.log(multiply())
console.log(random())
console.log(mod())
console.log(max())
