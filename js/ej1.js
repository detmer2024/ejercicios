// programa que evalua una funcion //
function evalfunc(){
    let x =parseFloat(document.getElementById("x").value) ;
    y=14*Math.exp(-0.1*x)*Math.sin(2*Math.PI*x);
    document.getElementById('resultado').innerHTML=y
    
}

