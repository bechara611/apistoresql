import Router from 'express'
import { ObtenerVentas } from '../Controllers/Ventas';

export const RouterVentas = Router();

RouterVentas.get('/',ObtenerVentas)