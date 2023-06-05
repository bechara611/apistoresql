import Router from 'express'
import { ObtenerVentas } from '../Controllers/Ventas.js';

export const RouterVentas = Router();

RouterVentas.get('/',ObtenerVentas)