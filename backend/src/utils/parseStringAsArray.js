//Objeto para transformar uma serie de strings em uma array de strings isoladas

module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim());
  }
//Split = Separa cada palavra de acordo com o atributo
//Trim = Tira os espaços do objeto