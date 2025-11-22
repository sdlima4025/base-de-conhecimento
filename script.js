// Variável global para armazenar os dados das linguagens
const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("header .search-container input");
const botaoBusca = document.getElementById("botao-busca");
let dados = [];

/**
 * Função assíncrona para carregar os dados do arquivo JSON.
 * Ela é chamada assim que o script é carregado.
 */
async function carregarDados() {
  try {
    const resposta = await fetch("data.json");
    dados = await resposta.json();
    // Exibe todos os dados inicialmente
    reiderizarCards(dados);
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
    cardContainer.innerHTML =
      "<p>Ocorreu um erro ao carregar as informações. Tente novamente mais tarde.</p>";
  }
}

function reiderizarCards(linguagens) {
  // Limpa o conteúdo atual do container para exibir os novos resultados
  cardContainer.innerHTML = "";

  if (linguagens.length === 0) {
    cardContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    return;
  }

  for (let linguagem of linguagens) {
    const article = document.createElement("article");
    article.classList.add("card");
    // Criar nome da imagem em minúsculas com espaços removidos para padrão src
    const imageName = linguagem.nome.toLowerCase().replace(/\s+/g, '') + '.png';
    article.innerHTML = `
      <img class="card-image" src="imagens/${imageName}" alt="Logo ${linguagem.nome}" onerror="this.onerror=null;this.src='imagens/codigo.png';" />
      <div class="card-content">
        <h2>${linguagem.nome}</h2>
        <p><strong>Ano de criação:</strong> ${linguagem.data_criacao}</p>
        <p>${linguagem.descricao}</p>
        <a href="${linguagem.link}" target="_blank" rel="noopener noreferrer">Acessar documentação</a>
      </div>
    `;
    cardContainer.appendChild(article);
  }
}

function iniciarBusca() {
  const termoBusca = campoBusca.value.toLowerCase();

  const resultados = dados.filter(
    (linguagem) =>
      linguagem.nome.toLowerCase().includes(termoBusca) ||
      linguagem.descricao.toLowerCase().includes(termoBusca)
  );

  reiderizarCards(resultados);
}

// Chama a função para carregar os dados assim que a página é carregada
carregarDados();

// Adiciona um "escutador de eventos" para o clique no botão de busca
botaoBusca.addEventListener("click", iniciarBusca);

// Adiciona um "escutador de eventos" para a tecla "Enter" no campo de busca
campoBusca.addEventListener("keyup", (event) => {
  // Verifica se a tecla pressionada foi a "Enter"
  if (event.key === "Enter") {
    iniciarBusca();
  }
});
