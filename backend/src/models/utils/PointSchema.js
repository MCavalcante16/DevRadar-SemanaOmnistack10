//Essa classe se refere a um ponto em um mapa, 
//pra ser utilizado como variavel para latitude 
//e longitude do dev

//vem da documentacao do mongo, para mapas

const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    //Tipo de ponto
    type: {
        type: String,        
        enum: ['Point'],   //segundo a documentacao do mongo, para salvar como um ponto
        required: true, //obrigatorio
    },

    //coordenadas do ponto
    coordinates: {
        type: [Number],  //array de numeros, para longitude e latitude
        required: true,  //obrigatorio
    },
});

//para exportar esse arquivo
module.exports = PointSchema;