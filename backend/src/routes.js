//Esse arquivo é para ser o controlador das rotas de uso da aplicação
const { Router } = require("express");
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.post('/devs', DevController.store);

routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);

routes.put('/update', DevController.update);

routes.delete('/delete', DevController.destroy);



//Para exportar este arquivo para outro que desejar invoca-lo
module.exports = routes;