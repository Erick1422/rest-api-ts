import express, { Application } from "express";
import cors from 'cors';

import userRoutes from "../routes/usuarios";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        this.middlewares();
        this.routes();

    }

    middlewares() {
        // Cors
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));
        
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en el puerto:', this.port);
        });
    }
}

// Se usa cuando solo se quiere exportar una sola clase/funcion
export default Server;