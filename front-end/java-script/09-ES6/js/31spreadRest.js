/* USANDO ...REST */
/*
function soma(...param) {
    let result = 0;
    console.log(param);
    param.forEach(v => result += v)
    return result;
}

console.log(soma(1,2,3,4, -5) + ' Esta é a soma dos parametros'); */

function mutiplicador(n, ...p) { // SPREAD USADO PARA UNIFICAR PARAMETROS restantes
    //console.log(n);
    //console.log(p);
    let result = 0;
    p.forEach(v => result += v * n) // percorro o aprametro P(restante dos parsmetos) com forEach
    return result;
}
console.log(mutiplicador(5, 7, 12, 3, 49));