import Router from 'express'
import { ObtenerVentas } from '../Controllers/Ventas.JS';

export const RouterVentas = Router();

RouterVentas.get('/',ObtenerVentas)