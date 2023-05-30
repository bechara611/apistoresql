import { Server } from "./models/Server.js";

try {
    const Servidor = new Server();
    Servidor.IniciarBackEnd();
    
} catch (error) {
    console.log(error)
}



