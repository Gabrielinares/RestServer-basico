const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config.db')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userRouthPath = '/api/user';

        //Conexion a BD
        this.connectarBD();

        //Middlewares
        this.middlewares();

        //Rutas de app
        this.routes();
    }

    routes(){
        //Endpoints User
        this.app.use(this.userRouthPath, require('../routes/user.routes'))
    }

    middlewares(){
        //Directorio publico
        this.app.use( express.static('public') );

        //CORS
        this.app.use(cors());

        //Parseo y lectura de body
        this.app.use( express.json() );
    }

    async connectarBD(){
        await dbConnection()
    }

    start(){
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutándose en el puerto: ', this.port);
        });
    }
}

module.exports = Server;