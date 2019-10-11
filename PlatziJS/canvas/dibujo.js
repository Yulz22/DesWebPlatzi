var d;
var lienzo;

d = document.getElementById("dibujito");
lienzo = d.getContext("2d");
console.log(lienzo);
console.log(d);
// dibujarLinea("red",100,100,250,2);
// dibujarLinea("blue",10,10,25,200);
// dibujarLinea("green",120,140,50,211); 
var i=0;

while(i<300)
{
    dibujarLinea("green",0,i+10,i+10,300);   
    i = i+10;
}

for(i=0;i<300;i+=10)
{
   dibujarLinea("yellow",300,i+10,i+10,0);
}
dibujarLinea("red",1,1,1,300);
dibujarLinea("red",1,299,299,299);
function dibujarLinea(color, x1, y1, x2, y2)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();  
}