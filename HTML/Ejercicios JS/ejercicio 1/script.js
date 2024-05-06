// declarar funciones

//funcion tradicional

/*
function myfunction() {
    return
}
*/

//function flecha o arrow function
/*
const myfuction = () =>{
    
}*/

let contador = 0;
// dato importante=> siempre los nombres de las funciones siguen la nomeclatura camelCase

function incrementarNumero() {
  let number = document.getElementById("numero").textContent;
  contador = contador + 1;
  document.getElementById("numero").textContent = contador;
}
