myfunction = (num1 , num2)=>{
    const concat = [...num1, ...num2];
    const max = Math.max(...concat);
    // const max = Math.max(...num1, ...num2);
    return max;
}
const numbers = myfunction([158 , 851, 54, 564, 656 ] , [54, 552, 656, 6986])
console.log(numbers);