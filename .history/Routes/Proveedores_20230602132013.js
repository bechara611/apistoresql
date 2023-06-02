import Router from 'express'
import { GetObtenerTodosProveedores } from '../Controllers/Proveedores.js';
import { validationResult } from 'express-validator';
import { VerificarJWT } from '../helpers/VerificarJWT.js';

const RouterProveedor=Router();


RouterProveedor.get('/',

validationResult,
VerificarJWT,
GetObtenerTodosProveedores)

export default RouterProveedor;