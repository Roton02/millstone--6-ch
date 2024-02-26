// const isArray = ["Ratul", "Roni", "rahim"];
// // const ratul = isArray[0];
// // const roni = isArray[1];
// // const rahim = isArray[2];

// const [, name1] = isArray;
// console.log(name1);
myFunction = (number)=>{
    let sum = 0;
    let elementOfArray = [];
    for (const num of number) {
        const squre = num*num
        elementOfArray.push(squre);
    }
    for (const add of elementOfArray) {
        sum += add
    }
    const avg = sum / elementOfArray.length;
     return avg;
}
const numbers = myFunction( [1, 2, 3, 4, 5, 6, 7, 8])
console.log(numbers);