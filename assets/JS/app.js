
/*navegador*/
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');

    // Alterna a visibilidade do menu e do overlay
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        overlay.classList.toggle('show-overlay');
    });

    // Esconde o menu e o overlay ao clicar no overlay
    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('show-overlay');
    });
});


let ulA = document.getElementById('show-nav-menu-a');
let nomeClubeA = "";
for (let clube of Object.values(clubes)) {
    if (clube.serie == "a") {
        nomeClubeA +=
        `<li><a href="#">${clube.nome}</a></li>`
    }
}
ulA.innerHTML = nomeClubeA;


let ulB = document.getElementById('show-nav-menu-b');
let nomeClubeB = "";
for (let clube of Object.values(clubes)) {
    if (clube.serie == "b") {
        nomeClubeB +=
        `<li><a href="#">${clube.nome}</a></li>`
    }
}
ulB.innerHTML = nomeClubeB;


/* function pesquisar() {*/
let section = document.getElementById('resultados-pesquisa');

let resultados = "";

for (let clube of Object.values(clubes)) {

    let conteudoTitulos = '';

if (clube.titulos_brasileiro || clube.titulos_libertadores || clube.titulos_Mundial) {
    conteudoTitulos = `
        <strong>Principais títulos:</strong>
        <ul>
            ${clube.titulos_brasileiro ? `<li>Brasileirão: ${clube.titulos_brasileiro}</li>` : ''}
            ${clube.titulos_libertadores ? `<li>Libertadores: ${clube.titulos_libertadores}</li>` : ''}
            ${clube.titulos_Mundial ? `<li>Mundial de Clubes: ${clube.titulos_Mundial}</li>` : ''}
        </ul>
    `;
}

    resultados +=
        `<div class="main-content intro-content">
        <div class="intro-text-content ">
            <h2>${clube.nome}</h2>
            <p>
                ${clube.descricao}
                <br>
                <strong>Mascote:</strong> ${clube.mascote}
                <br>
                <strong>Estádio:</strong> ${clube.estadio}
                <br>
                
                ${conteudoTitulos}
            <p>   
                Visite o site do ${clube.nome} <a href=${clube.link} alt=${clube.link_alt} target="_blank">clicando aqui</a>.
            </p>
        </div>        
        <div class="intro-img">
                ${clube.cor}
                ${clube.escudo}
        </div>
    </div>`
}
section.innerHTML = resultados;
/*}*/

//section. innerHTML é um elemento crítico, para não ficar adicionando texto a cada repetiçao, é uma boa pratica coloar todo texto em uma variável e depois colocar no HTML




