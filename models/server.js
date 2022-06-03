const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        //Inicialización de servidor y  configuración de puerto
        this.app = express();
        this.puerto = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de la aplicación
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body(Aca se transforma la información recibida de un post o put a formato json)
        this.app.use(express.json());

        //Directorio espicificado
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuariosRoutes'));
    }


    listen(){
        this.app.listen(this.puerto, () =>{
            console.log(`Example app listening at http://localhost:${ this.puerto }`);
        });
    }
}


module.exports = Server;