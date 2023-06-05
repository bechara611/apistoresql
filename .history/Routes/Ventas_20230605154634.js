import Router from 'express'
import { ObtenerVentas, RegistrarVenta } from '../Controllers/Ventas.js';
import { VerificarJWT } from '../helpers/VerificarJWT.js';
import { check } from 'express-validator';
import { CheckErrors } from '../helpers/CheckErrors.js';

export const RouterVentas = Router();

RouterVentas.get('/',
VerificarJWT,
ObtenerVentas)

//TODO verifica que traiga valores tipo fecha y arrayz
RouterVentas.post('/',
check('CED_CLIENTE','INSERT A CLIENT').not().isEmpty(),
check('FECHA','INSERT A DATE').not().isEmpty(),
check('FECHA','INSERT A DATE').isDate(),
check('PAGADO_TOTAL','INSERT A TOTAL').not().isEmpty(),
check('COD_PRODUCTO','INSERT A PRODUCT (ARRAYZ)').not().isEmpty(),
check('CANTIDAD','INSERT A CANTIDAD (ARRAYZ)').not().isEmpty(),
check('PAGADO','INSERT A PAGADO (ARRAYZ)').not().isEmpty(),
CheckErrors,
VerificarJWT,
RegistrarVenta)