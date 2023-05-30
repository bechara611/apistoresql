import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { RouterDefault } from '../Routes/Default.js';
import { ClienteRouter } from '../Routes/Clientes.js';
import { RouterUser } from '../Routes/User.js';
dotenv.config();

export class Server {

    constructor() {
        this.app = express();
        this.rutas = {
            user:'/api/user',
            default: '/*',
            clientes: '/api/clientes'
        }
        this.Middlewares();
        this.Rutas();
    }
    Middlewares() {
        this.app.use(express.json());
        this.app.use(cors())
    }
    Rutas() {
        this.app.use(this.rutas.user,RouterUser)
        this.app.use(this.rutas.clientes, ClienteRouter)
        this.app.use(this.rutas.default, RouterDefault)
       

    }

    IniciarBackEnd() {
        this.app.listen(process.env.PORT,()=>{
            console.log(`Activa en el puerto ${process.env.PORT}`)
        })
    }

}