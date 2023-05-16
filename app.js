import capitalizar from "./modificador";
import ordenar from "./modificador"

console.log(capitalizar);

var ingredientes = ['água', 'mel', 'sal', 'mostarda'];
var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenacao = ordenar(resultadoCapitalizado);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenacao);


// // var ordenado = modificado.sort(function(a,b){
// //  return a.localeCompare(b);

// // });

// console.log(ordenado);

