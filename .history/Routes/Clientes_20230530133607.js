import { Router } from "express";
import { getClientes } from "../Controllers/Clientes";

export const ClienteRouter= Router();

//?Ruta get de obtener todos los clientes
ClienteRouter.get('/',getClientes)