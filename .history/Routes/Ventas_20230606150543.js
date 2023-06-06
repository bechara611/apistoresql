import Router from 'express'
import { ObtenerDetalle, ObtenerVentas, RegistrarVenta } from '../Controllers/Ventas.js';
import { VerificarJWT } from '../helpers/VerificarJWT.js';
import { check } from 'express-validator';
import { CheckErrors } from '../helpers/CheckErrors.js';

export const RouterVentas = Router();

RouterVentas.get('/',
VerificarJWT,
ObtenerVentas)

RouterVentas.get('/:id',
check('id','INSERT ID').not().isEmpty(),
check('id','INSERT ID').isNumeric(),
CheckErrors,
VerificarJWT,
ObtenerDetalle)


RouterVentas.post('/',
check('CED_CLIENTE','INSERT A CLIENT').not().isEmpty(),
check('FECHA','INSERT A DATE').not().isEmpty(),
check('FECHA','INSERT A VALID DATE').isDate(),
check('PAGADO_TOTAL','INSERT A TOTAL').not().isEmpty(),
check('COD_PRODUCTO','INSERT A PRODUCT (ARRAYZ)').not().isEmpty(),
check('COD_PRODUCTO','COD_PRODUCTO MUST TO BE AN ARRAYZ').isArray(),
check('CANTIDAD','INSERT A CANTIDAD (ARRAYZ)').not().isEmpty(),
check('CANTIDAD','CANTIDAD MUST TO BE AN ARRAYZ').isArray(),
check('PAGADO','INSERT A PAGADO (ARRAYZ)').not().isEmpty(),
check('PAGADO','PAGADO MUST TO BE AN ARRAYZ').isArray(),
CheckErrors,
VerificarJWT,
RegistrarVenta)