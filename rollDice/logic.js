const mybutton=document.getElementById("mybutton");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");

let randomNumber1;
let randomNumber2;
let randomNumber3;

const min=1;
const max=6;


mybutton.onclick=function(){
    randomNumber1=Math.floor(Math.random()*max)+min;
    label1.textContent=randomNumber1;

     randomNumber2=Math.floor(Math.random()*max)+min;
    label2.textContent=randomNumber2;


    randomNumber3=Math.floor(Math.random()*max)+min;
    label3.textContent=randomNumber3;


}
