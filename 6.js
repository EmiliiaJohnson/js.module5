let array = [1,1,1];
let output = true;
for (let i=0; i < array.length - 1; i++) {
    if (array[i] != array[i + 1]) {
        output = false;
    }
}
console.log(output);
