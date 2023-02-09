let playlist = document.querySelector('.playlisthtml');
let bnt = document.querySelector('#showhide');

    function clicou() {
        if (playlist.style.display === 'block') {
            playlist.style.display = 'none'
        } else {
            playlist.style.display = 'block'
        }
    }  
    

//playlist logica dep rogramção

let playlist_logica = document.querySelector('.playlistlogica')
let btnlogica = document.querySelector('.showlogica')

function clicoulogica() {
    if (playlist_logica.style.display === 'block') {
        playlist_logica.style.display = 'none'
    } else {
        playlist_logica.style.display = 'block'
    }
}  