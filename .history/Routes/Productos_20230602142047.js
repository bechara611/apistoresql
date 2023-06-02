import Router from "express";
import { ObtenerProductos } from "../Controllers/Productos.js";

export const RouterProducto = Router();

RouterProducto.get('/',ObtenerProductos)