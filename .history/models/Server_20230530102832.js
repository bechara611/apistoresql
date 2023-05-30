import express from 'express'

class Server{

    constructor(){
        this.app= express();
    }
    Middlewares(){
        this.app.use(express.json())
    }
    Rutas(){

    }

    IniciarBackEnd(){

    }

}