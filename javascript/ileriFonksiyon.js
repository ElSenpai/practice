var hey=function selam(){
    console.log("Merhaba")
}
//selam()
hey()

const hey2= () => console.log("Dünya")
    
//selam()
hey2()

const hey3= () =>{
  console.log("Dünya")  
  console.log("Dünyaa")  
}
hey3();

const hey4= (mesaj) => console.log(mesaj)

hey4("merhaba");

var topla=(sayi1,sayi2)=>{
    return sayi1+sayi2;
}

let toplam = topla(3,4)

console.log(toplam)