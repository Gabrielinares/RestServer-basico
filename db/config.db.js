const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect( process.env.MONGODB_ATLAS);

        console.log('Conexion exitosa a BD');

    } catch (error) {
        console.log(error);
        throw new Error('Error en inicializar la base de datos');
    }

}

module.exports = {
    dbConnection
}