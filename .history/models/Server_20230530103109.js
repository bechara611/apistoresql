import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

class Server{

    constructor(){
        this.app= express();
        this.port=process.env.PORT ||8081
    }
    Middlewares(){
        this.app.use(express.json());
        this.app.use(cors())
    }
    Rutas(){

    }

    IniciarBackEnd(){

    }

}