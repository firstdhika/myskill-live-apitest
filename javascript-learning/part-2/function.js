function sayHello(){
    console.log("Hello world")
}

function sayMultiHello(){
    for(i=0; i<10; i++ ){
        sayHello()
    }
}
sayMultiHello()

function kali(a,b){
    hasilKali = a*b;
    console.log(hasilKali);
    return hasilKali
}

//memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilPembagian = kali(nilai1, nilai2);

console.log(hasilKali)