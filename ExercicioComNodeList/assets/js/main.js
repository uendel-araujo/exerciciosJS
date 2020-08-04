paragrafos = document.querySelector('.paragrafos');
ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;
console.log(bgColorBody);

for (let p of ps) {
    p.style.color = '#FFF';
    p.style.padding = '20px';
    paragrafos.style.backgroundColor = bgColorBody;
}