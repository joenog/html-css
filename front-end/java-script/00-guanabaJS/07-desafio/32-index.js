function parimp(n) {

    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

let resp = parimp(3)
console.log(resp)