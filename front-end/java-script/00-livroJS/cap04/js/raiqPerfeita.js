let frm = document.querySelector('form');
let res = document.querySelector('#res');

frm.addEventListener('submit', e => {
    e.preventDefault()

    let num = Number(frm.inNum.value);
    let perf = Math.sqrt(num)
    if (Number.isInteger(perf)) {
        res.innerHTML = `${perf} Raiz Perfeita`
    } else {
        res.innerHTML = `${perf} Raiz decimal!`
    }
})