import Router from 'express'
import { obtenerCompras } from '../Controllers/Compras.js';

export const RouterCompras = Router();


RouterCompras.get('/',
VerificarJWT,
obtenerCompras)