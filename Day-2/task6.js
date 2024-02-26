const instactor = [
    {
        name:'kajol',
        age:25,
        position: 'senior'
    },
    {
        name:'anushka',
        age:22,
        position : 'medium'
    },
    {
        name:'biddiya balan',
        age:29,
        position : 'senior'
    }

]
const actress = instactor.filter(names => names.position==='senior').map(names=>names.name);
console.log(actress);