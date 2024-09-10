// --------------------------------------------------------------

/*Menu lateral*/
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    const menuItems = document.querySelectorAll('.menu-items')

    // Alterna a visibilidade para o menu e overlay
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        overlay.classList.toggle('show-overlay');
    });

    // AO clicar no overley esconde o menu lateral
    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('show-overlay');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('show-overlay');
    });
    }

    )


    // menuItens.forEach('click', () => {
        // nav.classList.remove('active');
        // overlay.classList.remove('show-overlay');
    // });

});

// ----------------------------------------------------------

// Carrrega os times da serie A no menu lateral
let ulA = document.getElementById('show-nav-menu-a');
let nomeClubeA = "";
for (let clube of Object.values(clubes)) {
    if (clube.serie == "a") {
        nomeClubeA +=
            `<li class='menu-items' onclick="realizarBuscaAutomatica('${clube.nome}')"><a href="#${clube.nome}">${clube.nome}</a></li>`
    }
}
ulA.innerHTML = nomeClubeA;


// Carrrega os times da serie B no menu lateral
let ulB = document.getElementById('show-nav-menu-b');
let nomeClubeB = "";
for (let clube of Object.values(clubes)) {
    if (clube.serie == "b") {
        nomeClubeB +=
            `<li class='menu-items' onclick="realizarBuscaAutomatica('${clube.nome}')"><a  href="#${clube.nome}">${clube.nome}</a></li>`
    }
}
ulB.innerHTML = nomeClubeB;


function realizarBuscaAutomatica(nomeClube) {
    letcampoBuscar = document.getElementById('campo-buscar');
    campoBuscar.value = nomeClube;

    // Cria e dispara o evento de pressionamento da tecla "Enter"
    let event = new KeyboardEvent('keypress', {
        key: 'Enter',
        bubbles: true,
        cancelable: true
    });
    campoBuscar.dispatchEvent(event); //dispara o evento
}


// Obtém a referência à seção da página onde os resultados da pesquisa serão exibidos.
let section = document.getElementById('resultados-pesquisa');

// Buscar por times pelo input
let campoBuscar = document.getElementById('campo-buscar');

// Adiciona um ouvinte de evento para capturar as teclas pressionadas
campoBuscar.addEventListener('keypress', function (event) {

    // Verifica se a tecla pressionada foi Enter (código 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão de envio de formulário (se houver)

        let termoPesquisa = campoBuscar.value.toLowerCase();
        console.log(termoPesquisa);
        // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
        let resultados = "";
        let nomeClube = '';



        // Itera sobre cada clube no objeto "clubes", usando Object.values() para obter um array com os valores dos clubes.
        for (let clube of Object.values(clubes)) {
            nomeClube = clube.nome.toLowerCase();

            if (nomeClube.includes(termoPesquisa)) {



                // Inicializa uma string vazia que armazenará os títulos principais do clube, se houver.
                let conteudoTitulos = '';

                // Verifica se o clube possui títulos importantes (Brasileirão, Libertadores ou Mundial).
                // Se algum desses títulos existir, ele será adicionado à variável "conteudoTitulos" como uma lista HTML.
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

                // Adiciona à variável "resultados" o HTML formatado para cada clube.
                // Inclui o nome do clube, uma breve descrição, mascote, estádio, títulos (se houver), e um link para o site oficial do clube.
                resultados +=
                    `        <div class=" main-content  ">
            <div class="club-content main-background">
            <div class="club-text-content">
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
                 Visite o site do ${clube.nome} 
                 <a href=${clube.link} alt=${clube.link_alt} target="_blank">clicando aqui</a>.
             </p>
         </div>        
         <div class="club-img">
             ${clube.cor}
             ${clube.escudo}
         </div>
         </div>
     </div>`;
                campoBuscar.value = '';       //limpa campo de busca
            }


            section.innerHTML = resultados;
        }
    }
});


// Após a iteração sobre todos os clubes, define o conteúdo da seção "resultados-pesquisa" como a string "resultados", que contém o HTML formatado para todos os clubes.

// Comentário: section.innerHTML é uma prática eficiente aqui, pois evita adicionar conteúdo ao DOM repetidamente dentro do loop.
// Ao invés disso, o conteúdo é acumulado na variável "resultados" e, ao final, é inserido no DOM de uma vez.

//section. innerHTML é um elemento crítico, para não ficar adicionando texto a cada repetiçao, é uma boa pratica coloar todo texto em uma variável e depois colocar no HTML