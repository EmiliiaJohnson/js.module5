let array = [1,'www', 0,2,5,6,null,10];
let odd = 0;
let even = 0;
let zero = 0;
let notNumber= 0;
function getNumberType() {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            if (array[i] === 0) {
                zero++;
            }
            else if (array[i] % 2 === 0) {
                even++;
            } else if (array[i] % 2 !== 0) {
                odd++;
            }
        } else {
            notNumber++;
        }
    } return `Even ${even}, odd ${odd}, zero ${zero}, other type ${notNumber}`;
}
console.log(getNumberType());
