import Router from 'express'
import { RegistrarCompra, obtenerCompras, obtenerComprasDetalle } from '../Controllers/Compras.js';
import { VerificarJWT } from '../helpers/VerificarJWT.js';
import { CheckErrors } from '../helpers/CheckErrors.js';
import { check } from 'express-validator';

export const RouterCompras = Router();


RouterCompras.get('/',
VerificarJWT,
obtenerCompras)


RouterCompras.get('/:id',
check('id','INSERT ID').not().isEmpty(),
check('id','INSERT NUMERIC OR VALID ID').isNumeric(),
CheckErrors,
VerificarJWT,
obtenerComprasDetalle)




RouterCompras.post('/',
check('CED_PROVEEDOR','INSERT A PROVIDER').not().isEmpty(),
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
RegistrarCompra)