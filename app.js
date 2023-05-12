var ingredientes = ['água', 'mel', 'sal', 'mostarda'];
var modificado = [];

function capitalizar(ingredientes){
    var modificado = [];

    for (var i  = 0; i < ingredientes.length; i++){
        var letraInicial = 
            ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = 
            ingredientes[i].slice(1);
        var resultado = letraInicial + restoTexto;
    
        modificado[i] = resultado;
    }

    return modificado;
}

function ordenar(ingredientes){
    return ingredientes.sort(function(a,b){
        return a.localeCompare(b);
    });
}

var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenacao = ordenar(resultadoCapitalizado);

console.log(resultadoCapitalizado)
console.log(resultadoOrdenacao)








// // var ordenado = modificado.sort(function(a,b){
// //  return a.localeCompare(b);

// // });

// console.log(ordenado);

