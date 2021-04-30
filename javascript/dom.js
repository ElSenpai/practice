var hey=document.getElementById("bio")
hey.innerHTML="senpai"
 hey.style.color="red"
 hey.style.fontSize="20px"
hey.style.fontWeight="bold"

var intro1=document.getElementById("intro1");

var mesaj =document.getElementById("mesaj");

mesaj.innerHTML=intro1.innerHTML
mesaj.style.color=hey.style.color

var liste=document.getElementsByTagName("ul")
var sehirler=liste[0]

var tum= sehirler.getElementsByTagName("li");
for(i=0;i<tum.length;i++){
    console.log(tum[i].innerHTML)
    tum[i].style.color="red"
}

var li1=document.getElementsByTagName("li");
for(i=0;i<li1.length;i++){
    li1[i].style.fontSize="20px"
    li1[i].style.color="red"
}

var class1=document.getElementsByClassName("intro1")
var class2=document.getElementsByClassName("intro2")
var class3=document.getElementsByClassName("intro3")

class1[0].style.color="blue"

//alert(class1[1].innerHTML)

var queryMember=document.querySelectorAll("p.intro1")

console.log(queryMember.length)

var isimElemanları=document.getElementsByName("musteriAdi")
console.log(isimElemanları[0].value)

var heyyy=document.getElementById("heyt").addEventListener("click",renk);

function renk(){
   var renky= document.getElementsByClassName("div1")
   renky[0].style.color="red"
}







