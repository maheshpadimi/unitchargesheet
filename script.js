let x=0;
const amount_handler=()=>{

let charge = document.getElementById("charge_units").value
console.log(charge)
if(charge == "1unit"){
 x=10;
}
else if(charge == "2unit"){
x=20;
}
else if(charge == "3unit"){
    x=30;
}
else if(charge == "4unit"){
    x=40;
}
else if(charge == "5unit"){
    x=50;
}
else if(charge == "6unit"){
    x=60;
}
else if(charge == "7unit"){
    x=70;
}
else if(charge == "8unit"){
    x=80;
}
else if(charge == "9unit"){
    x=90;
}
else if(charge == "10unit"){
    x=100;
}
 document.getElementById("para").innerHTML= "Amount is " + x
}
const payHandler = () => {
    window.location.href = "./index2.html"
}