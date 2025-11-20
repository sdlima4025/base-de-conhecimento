// Variável global para armazenar os dados das linguagens
let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca(){
let resposta = await fetch("data.json");
dados = await resposta.json(); 
reiderizarCards(dados);
  
} 

function reiderizarCards(dados){
  for(let dado of dados){
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
    <h2>${dado.nome}</h2>
    <p><strong>Ano de criação:</strong> ${dado.ano}</p>
    <p>${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Acessar documentação</a>
    `;
    cardContainer.appendChild(article);
  }
}



// Seleciona os elementos do DOM que vamos manipular
// const container = document.querySelector("section");
// const campoBusca = document.querySelector("header .search-container input");

/**
 * Função assíncrona para carregar os dados do arquivo JSON.
 * Ela é chamada assim que o script é carregado.
 */
// async function carregarDados() {
//   try {
//     const resposta = await fetch("data.json");
//     dados = await resposta.json();
//     // Exibe todos os dados inicialmente
//     exibirDados(dados);
//   } catch (error) {
//     console.error("Erro ao carregar os dados:", error);
//     container.innerHTML =
//       "<p>Ocorreu um erro ao carregar as informações. Tente novamente mais tarde.</p>";
//   }
// }

/**
 * Função para exibir os dados na tela.
//  * @param {Array} linguagens - Um array de objetos de linguagem para exibir.
 */
// function exibirDados(linguagens) {
//   // Limpa o conteúdo atual do container
//   container.innerHTML = "";

//   if (linguagens.length === 0) {
//     container.innerHTML = "<p>Nenhum resultado encontrado.</p>";
//     return;
//   }

//   // Itera sobre cada linguagem e cria um card para ela
//   linguagens.forEach((linguagem) => {
//     const card = document.createElement("article");
//     card.innerHTML = `
//             <h2>${linguagem.nome}</h2>
//             <p><strong>Ano de criação:</strong> ${linguagem.ano}</p>
//             <p>${linguagem.descricao}</p>
//             <a href="${linguagem.link}" target="_blank">Acessar documentação</a>
//         `;
//     container.appendChild(card);
//   });
// }

// /**
//  * Função para filtrar os dados com base no termo de busca e exibi-los.
//  * Esta função é chamada pelo 'onclick' do botão.
//  */
// function iniciarBusca() {
//   const termoBusca = campoBusca.value.toLowerCase();

//   const resultados = dados.filter(
//     (linguagem) =>
//       linguagem.nome.toLowerCase().includes(termoBusca) ||
//       linguagem.descricao.toLowerCase().includes(termoBusca)
//   );

//   exibirDados(resultados);
// }

// // Chama a função para carregar os dados assim que a página é carregada
// carregarDados();
