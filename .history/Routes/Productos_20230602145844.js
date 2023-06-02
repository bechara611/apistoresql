import Router from "express";
import { ObtenerProductos } from "../Controllers/Productos.js";
import { VerificarJWT } from "../helpers/VerificarJWT.js";

export const RouterProducto = Router();

RouterProducto.get('/',
VerificarJWT,
ObtenerProductos)

RouterProducto.post('/register/',
VerificarJWT,
ObtenerProductos)