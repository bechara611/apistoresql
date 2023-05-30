import { Router } from "express";
import { getClientes, postClientes } from "../Controllers/Clientes.js";
import { check } from "express-validator";
import { CheckErrors } from "../helpers/CheckErrors.js";

export const ClienteRouter= Router();

//?Ruta get de obtener todos los clientes
ClienteRouter.get('/',getClientes)

//?Ruta de post para registrar los clientes
ClienteRouter.post('/',
check('name','PLEASE, INSERT A CLIENT NAME').not().isEmpty(),
CheckErrors,
postClientes)