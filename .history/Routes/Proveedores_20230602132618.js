import Router from 'express'
import { GetObtenerTodosProveedores, RegistrarProveedor } from '../Controllers/Proveedores.js';
import { validationResult } from 'express-validator';
import { VerificarJWT } from '../helpers/VerificarJWT.js';

const RouterProveedor=Router();


RouterProveedor.get('/',
VerificarJWT,
GetObtenerTodosProveedores)

RouterProveedor.post('/register/',
VerificarJWT,
RegistrarProveedor)

export default RouterProveedor;