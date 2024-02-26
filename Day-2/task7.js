const people =[
    {name:'jhon', age:26 },
    {name:'ceena', age:25},
    {name:'rook', age:32 }
]
const add = people.reduce((p, c) => p + c.age, 0)
console.log(add);