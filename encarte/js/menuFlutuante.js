// mostrar esconder menu
    let showConfigDiv = document.querySelector('#showConfig');
    function toggleConfig() {
    if (showConfigDiv.style.display == 'block') {
        showConfigDiv.style.display = 'none';
    } else {
        showConfigDiv.style.display = 'block';
    }
  }

  // modo escuro
  const body = document.querySelector('body');
  const menuFlutuante = document.querySelector('#menuFlutuante');
  function modoEscuro() {
      if (body.style.background === 'white') {
        document.querySelector('.bg-light').className = "bg-dark";
        body.style.background = '#1a1919';
        menuFlutuante.style.background = '#ffffff17';
        body.style.color = 'white';
    } else {
        document.querySelector('.bg-dark').className = "bg-light";
        body.style.background = 'white';
        menuFlutuante.style.background = '#ffffff57';
        body.style.color = 'black';
      }
  }



  // CONFIG USANDO OBJETOS
  /* 
  const app = {
  showConfigDiv: document.querySelector('#showConfig'),
  body: document.querySelector('body'),
  menuFlutuante: document.querySelector('#menuFlutuante'),

  toggleConfig() {
    if (this.showConfigDiv.style.display == 'block') {
        this.showConfigDiv.style.display = 'none';
    } else {
        this.showConfigDiv.style.display = 'block';
    }
  },

  modoEscuro() {
      if (this.body.style.background == 'white') {
          this.body.style.background = '#1a1919';
          this.menuFlutuante.style.background = '#ffffff67';
          this.body.style.color = 'white';
        } else {
            this.body.style.background = 'white';
            this.menuFlutuante.style.background = '#ffffff67';
          this.body.style.color = 'black';
      }
  }
}

  */