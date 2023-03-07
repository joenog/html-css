function enviar() {
    let num = document.querySelector('#num');
    let res = document.querySelector('#sel');

    if (num.value.length == '' || isNaN(num.value)) {
        alert('Apenas numeros!');
        document.body = location.reload()
    } else {
        num = Number(num.value)
        res.innerHTML = '' // select vazio para limpar options

        for (let cont = 0; cont <= 10; cont++) {
            item = document.createElement('option');
            item.text = `${num} x ${cont} = ${num*cont}`;
            res.appendChild(item);
        }
    }
}