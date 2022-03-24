
# API Rest com Crud

Projeto de API Rest com CRUD (usando uma váriavel para simular um DB).<br>
Este projeto é capaz de manipular uma biblioteca de livros com operações CRUD.

## Stack utilizada

**Back-end:** Foi desenvolvido com Javascript, NodeJS e Express.


## Requisitos

É preciso ter o NodeJS e NPM e o Insomnia instalados.

## Instalando e usando sistema

1º) Clonar o repositório do Github:<br>
git clone https://github.com/netoacgn/api_rest_nodejs.git

2º) Iniciar o server com o NodeJS<br>
npm run dev

3º) Testar as rotas com o Insomnia:<br>
GET /books<br>
"Retorna os dados dos livros cadastrados."

POST /books<br>
"Cria novos registros com os dados dos livros."

PUT /books/:book_id<br>
"Atualiza os dados dos livros conforme Id do livro requisitado."

DELETE /books/:book_id<br>
"Deleta o livro conforme Id do livro requisitado."





