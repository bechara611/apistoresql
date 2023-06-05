import Router from 'express'
import { ObtenerVentas, RegistrarVenta } from '../Controllers/Ventas.js';
import { VerificarJWT } from '../helpers/VerificarJWT.js';

export const RouterVentas = Router();

RouterVentas.get('/',
VerificarJWT,
ObtenerVentas)

RouterVentas.post('/',RegistrarVenta)