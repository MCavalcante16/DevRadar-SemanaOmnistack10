const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const cors = require('cors');

const app = express();


//Para conectar o mongodb com a aplicação (Pacote mongoose deve ser instalado)
mongoose.connect('mongodb+srv://maurikin:32669588@cluster0-dfs4d.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Para conectar esse backend com o front, usando o mesmo endereço/link
//Sem parametros = Libera acesso pra qualquer um
app.use(cors( { origin: 'http://localhost:3000' }));


//Para o express trabalhar com json 
app.use(express.json());

//METODOS HTTP
//get: quando quero buscar uma informacao do bd
//post: quando quero adicionar uma informacao no bd
//put: editar uma informacao no bd
//delete: remover uma informacao do bd

//COMUNICACAO GENERALIZADA COM O BD
//Request: o que vem junto com a page quando entro nela
//Response: o que vou retornar a partir da pagina que estou

//TIPOS DE PARAMETROS
//Query(Qualquer) params: request.query (Filtros, ordenacao, paginacao, ...)
//Route(Especifico) params: request.params (Identificar o objeto para edicao ou remocao)
//Body(Do zero / Cria): request.body (Corpo de um objeto para se criar/alterar)

//para invocar o que esta em routes
app.use(routes);

//Para definir o endereço
app.listen(3333);