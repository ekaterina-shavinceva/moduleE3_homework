let start = prompt('Введите первое число')
start = parseInt(start);
let stop = prompt('Введите второе число')
stop = parseInt(stop);

function printANumber(start, stop) {
    let current = start;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == stop) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printANumber(start, stop);