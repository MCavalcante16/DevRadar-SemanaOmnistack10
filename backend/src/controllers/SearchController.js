//=========================Objeto para busca de devs=======================================================


const Dev = require('../models/Dev');
const parseStringAsArray = require ('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        //Buscar os devs num raio de 10km
        //filtrar por tecnologia
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
    
        const devs = await Dev.find({
            techs: {
                //$in é um operador logico do mongodb. Existem varios outros.
                $in: techsArray,
            },
            location: {
                //retorna o que esta dentro da proximidade (near)
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs });
    }
}