
const textBox=document.getElementById("textBox");
const toFern=document.getElementById("toFernheight");
const tocel=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;
function convert(){
    if (toFern.checked){
        temp=textBox.value;
        temp=Number(temp);
        temp=temp*9/5 +32;
        result.textContent=temp.toFixed(1)+"  Fernheight";


        

    }
    else if(tocel.checked){
        temp=textBox.value;
        temp=Number(temp);
        temp=(temp-32)*5/9;
        result.textContent=temp.toFixed(1)+"  Celsius";

    }
    else{
        result.textContent="select a conversion unit form above";
    }



}