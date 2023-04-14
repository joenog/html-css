//cria referencia ao formulario
const form = document.querySelector('form');
const res = document.querySelector('#res');
// adiciona ouvidor w ofornulario
form.addEventListener('submit', (enviar) => {
    enviar.preventDefault()

    const tempo = form.min.value;
    const film = form.film.value;
    const hora = Math.floor(tempo / 60) // arredonda para baixo o resultado
    const min = tempo % 60; // divide pelo tempo e oq restar é os minutos 160 % 60 = 120 sobra 40
    // condiicona para mostrar apenas os minutos
    if (tempo < 60) {
        res.innerHTML = `${tempo} Minutos`
        return;
    }
    res.innerHTML = `Nome ${film} <br>
    Duraçao ${hora} horas, ${min} minutos`
})