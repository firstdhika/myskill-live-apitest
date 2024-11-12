var car = {
    //properti
    type: "Fiat",
    mode: "500",
    color: "white",
    date:  {
        year :2023,
        month : "December",
        date: 25,
    },

    data:[
        1,2,3,4,5
    ],

    //method
    start: function(){
        console.log("ini method start");
    },
    drive: function(){
        console.log("ini method drive")
    },
    brake: function(){
        console.log("ini method brake")
    },
    stop: function(){
        console.log("ini method stop")
    }

};

car.start()
console.log(car.data)