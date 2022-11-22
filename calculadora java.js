
let numerouno = parseInt(prompt("ingrese un numero"));
let operacion  = prompt("Ingrese una operacion + - / * ");
let numerodos = parseInt(prompt("ingrese un numero"));
let resultado;


switch(operacion) {
    case "+":
        resultado=(numerouno)+(numerodos)
        alert("Tu resultado es: " + resultado);
   break;
   case "-":
    resultado=(numerouno)-(numerodos)
    alert("Tu resultado es: " + resultado);
break;
case "*":
        resultado=(numerouno)*(numerodos)
        alert("Tu resultado es: " + resultado);
   break;
   case "/":
        resultado=(numerouno)/(numerodos)
        alert("Tu resultado es: " + resultado);
        if(numerodos>0){
            alert("Tu resultado es: " + resultado);
        }else{
            alert("ERROR:NO SE PUEDE DIVIDIR POR 0")
        
        }
   break;
   default:
   alert("ERROR:Ingrese una operación válida (+ - * /)")
  break;

}
