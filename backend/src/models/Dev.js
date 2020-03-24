//importacoes
const mongoose = require("mongoose");
const PointSchema = require('./utils/PointSchema')
//importacoes-end

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere' //para se basear num eixo x e y
    }
});

//Para ser lido pelo mongodb, se exporta assim
module.exports = mongoose.model("Dev", DevSchema);