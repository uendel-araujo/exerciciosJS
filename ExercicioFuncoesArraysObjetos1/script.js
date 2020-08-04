function meuEscopo() {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobrenome');
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<h3>Seu nome : ${nome.value} ${sobrenome.value} <br/> Seu peso : ${peso.value} kg <br/> Sua altura : ${altura.value} m</h3>`;
    });
}

meuEscopo();