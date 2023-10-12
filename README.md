# Projeto ExpertFY

Este projeto foi desenvolvido utilizando Node.js + React e o Swagger para documentação da API. O banco utilizado foi o MySQL. Siga as etapas abaixo para configurar e rodar o projeto em sua máquina.

## Pré-requisitos

- Node.js: [Instale o Node.js](https://nodejs.org/)
- Banco de dados MySQL: [Instale o MySQL](https://dev.mysql.com/downloads/installer/)


## Configuração inicial do Banco de Dados 

1. Configure as variáveis de ambiente para a conexão com o banco de dados. Crie um arquivo `.env` na pasta `expertfy-api/` do projeto e copie o conteudo de `db-vars.txt` para ele.

2. Importe o dump das tabelas para o seu banco de dados MySQL a partir do arquivo `dump_tabelas.sql` na pasta do projeto.

## Configuração do Backend

1. Abra um terminal e navegue até o diretório `expertfy-api/`.

2. Instale as dependências do Node.js executando o seguinte comando:
   ```
   npm install
   ```

3. Inicie o servidor Node.js com o seguinte comando:
   ```
   npm run dev
   ```
O servidor backend estará em execução em `http://localhost:3000`.

## Documentação

A partir deste momento você pode acessar a documentação da API através do Swagger no link `http://localhost:3000/api-docs/#/`

## Configuração do Frontend


1. Abra outro terminal e navegue até o diretório `expertfy-front/`.

2. Instale as dependências do Node.js executando o seguinte comando:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento React com o seguinte comando:
   ```
   npm run dev
   ```

O aplicativo React estará em execução em `http://localhost:5173`.

## Uso

Acesse o aplicativo em seu navegador acessando `http://localhost:5173` e utilize as funcionalidades conforme apropriado para o projeto.

## Contribuição

Se desejar contribuir para o projeto, siga as melhores práticas de contribuição e crie um pull request.


