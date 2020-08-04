let nome = 'Uendel Ives';
let sobrenome = 'Araujo';
let idade = 27;
let peso = 75;
let altura = 1.77;
let anoNascimento;
let imc;

imc = peso / (altura * altura);
anoNascimento = 2020 - idade;

console.log(anoNascimento);

console.log(`Olá ${nome} ${sobrenome}! Sua altura é: ${altura}m, seu peso é de ${peso}kg e seu IMC é: ${imc} e você nasceu em: ${anoNascimento}`);
