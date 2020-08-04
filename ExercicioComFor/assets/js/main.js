const elementos = [
    { tag: 'p', texto: 'Uendel Ives de Araujo' },
    { tag: 'div', texto: 'Larissia de Carvalho Medeiros' },
    { tag: 'footer', texto: 'Lara de carvalho Araujo' },
    { tag: 'section', texto: 'Minha família' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;

    div.appendChild(tagCriada);
}

container.appendChild(div);