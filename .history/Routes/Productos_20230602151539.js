import Router from "express";
import { ObtenerProductos, RegistrarProductos } from "../Controllers/Productos.js";
import { VerificarJWT } from "../helpers/VerificarJWT.js";
import { check } from "express-validator";

export const RouterProducto = Router();

RouterProducto.get('/',
VerificarJWT,
ObtenerProductos)

RouterProducto.post('/register/',
check('name','PLEASE INSERT A NAME').not().isEmpty(),
check('stock','PLEASE INSERT A STOCK').not().isEmpty(),
check('precio','PLEASE INSERT A PRODUCT PRICE').not().isEmpty(),
check('precio','PLEASE INSERT A PRODUCT PRICE').not().isNumeric(),
check('stock','PLEASE INSERT A PRODUCT PRICE').not().isNumeric(),

VerificarJWT,
RegistrarProductos)