
// fatorial do numero 

function fatori(n) {
    let fat = 1;
    for (let cont = n; cont > 1; cont--)
    fat = fat * cont;
    return fat
}
console.log(fatori(4))