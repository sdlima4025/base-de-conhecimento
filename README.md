# 📚 Base de Conhecimento de Tecnologias

Uma aplicação web simples que funciona como uma base de conhecimento para diversas tecnologias de programação, como linguagens, frameworks e ferramentas. Permite visualizar as informações em formato de cartões e realizar buscas por nome ou descrição.

 <!-- Substitua com um screenshot real do seu projeto -->

## ✨ Funcionalidades

- **Visualização em Cartões:** Apresenta cada tecnologia em um cartão de fácil leitura.
- **Busca Dinâmica:** Filtra as tecnologias em tempo real com base no termo digitado pelo usuário.
- **Dados Externos:** Carrega as informações de um arquivo `data.json`, facilitando a adição e manutenção de novos itens.
- **Links para Documentação:** Cada cartão contém um link direto para a documentação oficial da tecnologia.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Para a estrutura semântica da página.
- **CSS3:** Para a estilização e layout dos componentes (arquivo `style.css`).
- **JavaScript (ES6+):** Para a interatividade, manipulação do DOM e lógica de busca.

## 🏁 Como Executar o Projeto

Por utilizar a API `fetch` para carregar dados locais (`data.json`), o projeto precisa ser executado a partir de um servidor web local para evitar problemas com a política de CORS (Cross-Origin Resource Sharing) dos navegadores.

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Edge, etc.).
- Um editor de código como o Visual Studio Code.

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-diretorio
    ```

3.  **Inicie um servidor local:**
    A maneira mais fácil é usar uma extensão como o **Live Server** no VS Code.
    - Instale a extensão Live Server.
    - Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

O projeto será aberto automaticamente no seu navegador padrão.

## 🔧 Como Usar

1.  Ao abrir a página, todos os itens da base de conhecimento serão exibidos.
2.  Para encontrar uma tecnologia, digite um termo na barra de busca (ex: "frontend", "React", "banco de dados").
3.  Clique no botão **"Buscar"** para ver os resultados filtrados.
4.  Para acessar a documentação oficial, clique no link **"Acessar documentação"** em qualquer cartão.

## 📂 Estrutura do Projeto

```
base-de-conhecimento/
├── 📄 index.html       # Estrutura principal da página
├── 🎨 style.css        # Arquivo de estilos para o layout e design
├── 📜 script.js        # Lógica da aplicação (busca, renderização dos cartões)
└── 🗃️ data.json        # Banco de dados com as informações das tecnologias
```

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Se você deseja adicionar novas tecnologias, corrigir informações ou melhorar o código, siga os passos abaixo:

1.  **Faça um Fork** do projeto.
2.  **Crie uma nova Branch:** `git checkout -b feature/sua-nova-feature`.
3.  **Adicione suas alterações:**
    - Para novas tecnologias, adicione uma nova entrada no arquivo `data.json` seguindo o formato existente.
    - Para melhorias no código, edite os arquivos `script.js` ou `style.css`.
4.  **Faça o Commit:** `git commit -m 'feat: Adiciona a tecnologia X'`.
5.  **Envie para o seu Fork:** `git push origin feature/sua-nova-feature`.
6.  **Abra um Pull Request** no repositório original.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes. (Você pode criar um arquivo `LICENSE` com o conteúdo da licença MIT, se desejar).

---

Feito por: sdlima.
