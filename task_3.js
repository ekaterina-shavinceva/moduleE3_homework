let a = prompt('Введите первое число')
a = parseInt(a);
let b = prompt('Введите второе число')
b = parseInt(b);

function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

const sumFunction = getSumFunction(a);

const sum = sumFunction(b)

console.log(sum);