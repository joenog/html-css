
function clicou() {
    let res = document.querySelector("#res")
    let nums = new Set();
    const quant = 6;

    while (nums.size < quant) {
        nums.add(Math.floor(Math.random() * 60) + 1);
    }

    res.innerHTML = `/ `
    res.innerHTML += [...nums];

}

function reset() {
    document.body = location.reload();
}