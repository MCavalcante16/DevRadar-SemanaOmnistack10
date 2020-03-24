//Objeto para controlar as entradas e saidas do usuario ao mexer nas informações de devs

const axios = require("axios"); 
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response){
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio} = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
 
            //Nao precisa colocar : devido o share do js
            dev = await Dev.create({  //esse await esta a serviço do async, apontando o que vai especificamente esperar resposta
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(dev);
    },

    async update(request, response){
        const { github_username, name, bio, avatar_url, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        const techsArray = parseStringAsArray(techs);

        if(dev){
            const dev = await Dev.updateOne({ github_username }, {  //esse await esta a serviço do async, apontando o que vai especificamente esperar resposta
                $set: {
                    name,
                    avatar_url,
                    bio,
                    techs: techsArray,
                    location: {
                        type: 'Point',
                        coordinates: [longitude, latitude]

                    }
                }
            })
        }

        return response.json(dev);

    },

    async destroy(request, response){
        const { github_username } = request.body;

        const dev = await Dev.findOne({ github_username });

        if(dev){
            await Dev.deleteOne({ github_username });
        }

        return response.json(dev);
    }
    
}