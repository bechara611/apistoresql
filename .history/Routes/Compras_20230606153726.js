import Router from 'express'
import { obtenerCompras } from '../Controllers/Compras.js';
import { VerificarJWT } from '../helpers/VerificarJWT.js';

export const RouterCompras = Router();


RouterCompras.get('/',
VerificarJWT,
obtenerCompras)