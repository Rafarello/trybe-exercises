const factorial = (a) => {
    let factorialResult = 1;
    for (let index = 1; index <= a; index += 1) {
        factorialResult *= index;
    }
    return factorialResult;
}
console.log(factorial(5))