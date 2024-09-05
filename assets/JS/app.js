function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');

    let resultados = "";

    for (let clube of Object.values(clubes)) {
        resultados +=
            `<div class="item-resultado">
                <div class="item-resultado-titulo">
                        <h2>${clube.nome}</h2>
                        ${clube.cor}
                        ${clube.escudo}
                    </div>
                    <p>
                        ${clube.descricao}
                        <br>
                            <strong>Mascote:</strong> ${clube.mascote}
                            <br>
                            <strong>Estádio:</strong> ${clube.estadio}
                            <br>
                            <strong>Principais títulos:</strong>
                        <ul>
                            <li>Brasileirão: ${clube.titulos_brasileiro}</li>
                            <li>Libertadores: ${clube.titulos_libertadores}</li>
                            <li>Mundial de Clubes: ${clube.titulos_Mundial}</li>
                        </ul>
                        Visite o site do ${clube.nome} <a href=${clube.link} alt=${clube.link_alt} target="_blank">clicando aqui</a>.
                    </p>
                </div>
            </div>`
    }
    section.innerHTML = resultados;
}



//section. innerHTML é um elemento crítico, para não ficar adicionando texto a cada repetiçao, é uma boa pratica coloar todo texto em uma variável e depois colocar no HTML