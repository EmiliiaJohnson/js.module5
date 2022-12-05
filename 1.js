let input = prompt('Please enter number');
let value = +input;
if (typeof value === 'number' && !isNaN(input)) {
    if (value == 0) {
        console.log('Это ноль')
    } else if (value % 2 === 0) {
        console.log('Это четное число')
    } else {
        console.log('Это нечетное число')
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}


