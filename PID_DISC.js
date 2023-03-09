var p_continuo= document.getElementById("input_p");
var i_continuo= document.getElementById("input_i");
var d_continuo=document.getElementById("input_d");
var ts=document.getElementById("input_ts");

var boton=document.getElementById("boton");
var botonayuda=document.getElementById("botonayuda");

var r=document.getElementById("resultado");
var r2=document.getElementById("ayuda");
var p_discreto=0.0;
var i_discreto=0.0;
var d_discreto=0.0;

var Ti=0;
var Td=0.0;
var ro=0;

var aux=0;

function calcular(){

    p_continuo.value=parseFloat(p_continuo.value);
    i_continuo.value=parseFloat(i_continuo.value);
    d_continuo.value=parseFloat(d_continuo.value);
    ts.value=parseFloat(ts.value);

    if (ts.value > 0 )
    {
        Ti=(p_continuo.value/i_continuo.value);
        Td=d_continuo.value/p_continuo.value;
        p_discreto=p_continuo.value- ( (p_continuo.value*ts.value) / (2*Ti) );
        i_discreto=( (p_continuo.value*ts.value) / (Ti) );
        d_discreto=( (p_continuo.value*Td) / (ts.value) );;

        r.innerHTML="Los parámetros calculados para el controlador PID discreto son: "+"<br/>"+"P= "+ p_discreto.toFixed(2) + "<br/>"+"  I= "+ i_discreto.toFixed(2) + "<br/>"+"  D= "+ d_discreto.toFixed(2) + "<br/>"+"Para un tiempo de muestreo de "+ "s= "+ (-ro).toFixed(2) + " ± " +(Math.sqrt(1- ro*ro)).toFixed(2) +" j "  ; 

    }
    else
    {   
        r.innerHTML="Error de parametros";
    }

}
function ayuda()
{
    if(aux==1)
    {
        aux=0;
        r2.innerHTML="";

    }
    else
    {
        aux=aux+1;
        r2.innerHTML="Este programa realiza la discretización de un controlador PID continuo hacia uno discreto aproximando la integral mediante una sumatoria trapezoidal y aproximando los terminos derivativos mediante la diferencia de dos puntos, y aplicando en el tiempo de muestreo deseado es posible obtener unos parámetros equivalentes para un controlador PID discreto, implementable en ecuaciones de diferencias, debe tener presente que para que el controlador PID discreto sea funcional debe cumplir con el teorema de Nyquist y ademas se recomienda que el tiempo de muestreo sea por lo menos unas ocho a diez veces mas rapido que la frecuencia natural del sistema a controlar.";
    }
    
}
botonayuda.addEventListener("click",ayuda);
boton.addEventListener("click",calcular);