const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userRouthPath = '/api/user';

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

    start(){
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutándose en el puerto: ', this.port);
        });
    }
}

module.exports = Server;
