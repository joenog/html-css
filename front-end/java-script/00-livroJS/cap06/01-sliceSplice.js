let num = [1,2,3,4,5]
num.splice(-2); // apenas uma declaração negativa removera numeros do fim
// caso hja duas declarações (0, -2) - com a segunda declaração negativa essa removera itens do inicio
//o splice é usado para editar a raiz os arrays, ja os slice e usado apenas para editar a visuaização
console.log(num)