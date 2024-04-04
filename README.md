# desafio-backend
# Projeto de API Node.js

Este é um projeto de uma API node.js no padrão RESTful que possibilita a criação e listagem de posts e comentários. Sendo que cada comentário deve pertencer a um post.

## Requisitos

- Node.js instalado
- MySQL instalado

## Instalação

1. **Clone o repositório para o seu ambiente local:**

    ```
    git clone https://github.com/FabioFreire-ff/desafio-backend.git
    ```

2. **Navegue até o diretório do projeto:**

    ```
    cd desafio-backend
    ```

3. **Instale as dependências do projeto utilizando o npm:**

    ```
    npm install
    ```

4. **Configure as credenciais do banco de dados:**

    - Abra o arquivo `src/config/config.json`.
    - Atualize as credenciais de `username` e `password` com as suas credenciais do MySQL.
    - Verifique que o `database` está configurado com o nome do banco de dados que irá ser criado.

5. **Crie o banco de dados:**

    ```
    npm run createdb
    ```

## Uso

1. **Inicie o servidor:**

    ```
    npm start
    ```

2. **O servidor estará rodando em `http://localhost:3000`.**

3. **Você pode utilizar ferramentas como Postman ou Insomnia para fazer requisições para os endpoints fornecidos pela API.**

## Documentação da API

### Endpoints

- **GET /posts**: Retorna uma lista de todos os posts.
- **POST /posts**: Cria um novo post.
  - Corpo da solicitação (JSON):
    ```json
    {
      "title": "Título do post",
      "content": "Conteúdo do post"
    }
    ```
- **PUT /posts/:id**: Atualiza um post existente pelo ID.
  - Corpo da solicitação (JSON):
    ```json
    {
      "title": "Novo título do post",
      "content": "Novo conteúdo do post"
    }
    ```
- **DELETE /posts/:id**: Exclui um post existente pelo ID.

- **POST /posts/:postId/comments**: Adiciona um comentário a um post específico.
  - Corpo da solicitação (JSON):
    ```json
    {
      "content": "Conteúdo do comentário"
    }
    ```
- **DELETE /posts/:postId/comments/:commentId**: Exclui um comentário específico de um post.

> Lembre-se de substituir `:id` , `:postId` e `:commentId` pelos valores reais ao testar os endpoints.

## Executando o ESLint

Este projeto utiliza o ESLint para manter um código limpo e consistente. Você pode executar o ESLint no projeto usando o seguinte comando:

    npx eslint .

Este comando verificará todos os arquivos JavaScript no projeto e relatará quaisquer problemas de estilo ou possíveis erros. Se desejar, você pode corrigir automaticamente alguns problemas adicionando a opção `--fix`:

    npx eslint . --fix

Isso tentará corrigir automaticamente qualquer problema de estilo que puder ser resolvido automaticamente.
