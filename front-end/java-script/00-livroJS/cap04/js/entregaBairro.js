let bairro = 'novame'.toLocaleLowerCase();
let taxaEntrega 

switch (bairro) {
    case 'novame':
        taxaEntrega = 'Entrega 5R$';
        break
    case 'olocas':
        taxaEntrega = 'Entrega 7R$';
        break
    case 'iniame':
        taxaEntrega = 'Entrega 9R$';
        break
    case 'calimbo':
        taxaEntrega = 'Entrega 10R$';
        break
    case 'hafinout':
        taxaEntrega = 'Entrega 12R$';
        break
    default:
        taxaEntrega = ''
};
