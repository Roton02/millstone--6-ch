let student = {
    2222:{
        name:'jack',
        section : 'A',
        address:{
            "building no" : 30,
            "street": "st. jhonson",
            "city": "petarBurg"
        }
    },
    3333:{
        name:'herry',
        section : 'A',
        address:{
            "building no" : 30,
            "street-1 ": "st. jhonson",
            "city": "petarBurg"
        }
    }
}
console.log(student[2222].address.street);
console.log(student[3333].name);