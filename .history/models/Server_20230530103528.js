import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8081
        this.rutas = {
            default: '/*',
            clientes: '/api/clientes'
        }
        this.Middlewares();
        this.rutas();
    }
    Middlewares() {
        this.app.use(express.json());
        this.app.use(cors())
    }
    Rutas() {
        this.app.use(this.rutas.default, () => { })
        this.app.use(this.rutas.clientes, () => { })

    }

    IniciarBackEnd() {
        this.app.listen(this.port, () => { console.log(`Running in ${this.port}`) });
    }

}