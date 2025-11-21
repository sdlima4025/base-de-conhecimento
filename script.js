// Variável global para armazenar os dados das linguagens
const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("header .search-container input");
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
    article.innerHTML = `
      <h2>${linguagem.nome}</h2>
      <p><strong>Ano de criação:</strong> ${linguagem.data_criacao}</p>
      <p>${linguagem.descricao}</p>
      <a href="${linguagem.link}" target="_blank">Acessar documentação</a>
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
