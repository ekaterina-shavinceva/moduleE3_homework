let x = prompt('Введите число')
x = parseInt(x);
let n = prompt('Введите степень числа')
n = parseInt(n);

const pow = (x, n) => {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

const result = pow(x, n)
console.log(result)