import Router from 'express'
import { obtenerCompras, obtenerComprasDetalle } from '../Controllers/Compras.js';
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