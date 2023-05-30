import { Router } from "express";
import { getClientes } from "../Controllers/Clientes";

const ClienteRouter= Router();

//?Ruta get de obtener todos los clientes
ClienteRouter.get('/',getClientes)