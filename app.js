function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada informado no campo de pesquisa.</p>";
    return
  }

  // Inicializa uma string vazia para armazenar os resultados.
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre os dados da pesquisa.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Constrói o HTML para cada item de resultado.
      resultados += `
        <div class="item-resultado">
          <h2>
            ${dado.titulo}
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <p>Para mais informações sobre ${dado.titulo}, visite os links a seguir:</p>
          <a href=${dado.links.wikipedia} target="_blank">
            Wikipédia
          </a>
          <a href=${dado.links.instagram} target="_blank">
            Instagram
          </a>
        </div>
      `;
    }

  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado.</p>";
  }

  // Atualiza o conteúdo HTML da seção com os resultados.
  section.innerHTML = resultados;
}
