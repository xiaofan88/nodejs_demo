function greet(name) {
    return `Hello, ${name || 'World'}!`;
}
  
console.log(greet('Xiaofan'));
module.exports = greet;
  