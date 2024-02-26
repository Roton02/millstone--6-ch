let data ={
    sopia:{
        id : 33,
        study:[
            {
                primary:[
                    {school_name:"ABC primary school"},
                    {location: "petars burg"}
                ]
            },
            {
                secondary :[
                    {school_name:'DEF secondary school'},
                    {location: "petars parks"}
                ]
            }

        ]
    }
}
console.log(data.sopia.study[1].secondary[1].location);