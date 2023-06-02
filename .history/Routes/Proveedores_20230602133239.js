import Router from 'express'
import { GetObtenerTodosProveedores, RegistrarProveedor } from '../Controllers/Proveedores.js';
import { check, validationResult } from 'express-validator';
import { VerificarJWT } from '../helpers/VerificarJWT.js';
import { CheckErrors } from '../helpers/CheckErrors.js';

const RouterProveedor=Router();


RouterProveedor.get('/',
VerificarJWT,
GetObtenerTodosProveedores)

RouterProveedor.post('/register/',
check('cedula','INSERT A CED (ID)').not().isEmpty(),
check('name','INSERT A NAME').not().isEmpty(),
CheckErrors,
VerificarJWT,
RegistrarProveedor)

export default RouterProveedor;