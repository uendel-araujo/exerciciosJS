let numero = Number(prompt('Digite um número:'));
let numeroTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<h4>Raiz Quadrada é: ${numero ** 0.5}</h4>`;
texto.innerHTML += `<h4>${numero} é inteiro: ${Number.isInteger(numero)} </h4>`;
texto.innerHTML += `<h4>${numero} é NaN: ${Number.isNaN(numero)} </h4>`;
texto.innerHTML += `<h4>Arredondado para baixo: ${Math.floor(numero)} </h4>`;
texto.innerHTML += `<h4>Arredondado para cima: ${Math.ceil(numero)} </h4>`;
texto.innerHTML += `<h4>Com duas casas decimais: ${numero.toFixed(2)} </h4>`;