//EXERCICIO COM LÓGICA DE PROGRAMAÇÃO EM QUE CRIA UMA FUNÇÃO E ESSA FUNÇÃO RECEBE 2 NÚMERO E RETORNA O MAIOR DELES
const maximo = (x, y) => x > y ? x : y;
console.log(maximo(10, 8));

//EXERCICIO QUE CRIA UM FUNÇÃO E RETORNA A INFORMAÇÃO SE A IMAGEM ESTÁ NO MODO RETRADO OU PAISAGEM
const ePaisagem = (altura, largura) => largura > altura ? 'Está no modo PAISAGEM' : 'ESTÁ NO MODO RETRATO';
console.log(ePaisagem(2400, 1200));

//EXERCICIO QUE CRIA UMA FUNÇÃO, RECEBE UM NUMERO E INFORMA SE É DIVISIVEL POR 3 , POR 5 OU POR 3 E 5 AO MESMO TEMPO
function eDivisivel(x) {
    if (typeof x !== 'number') return NaN;
    if (x % 3 === 0 && x % 5 === 0) return 'É divisível por 3 e por 5';
    if (x % 3 === 0) return 'É divisível por 3';
    if (x % 5 === 0) return 'É divisível por 5';
    return x;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, eDivisivel(i));
}