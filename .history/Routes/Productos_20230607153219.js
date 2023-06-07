import Router from "express";
import { ObtenerProductos, RegistrarProductos, RegistrarProductosPorProveedor } from "../Controllers/Productos.js";
import { VerificarJWT } from "../helpers/VerificarJWT.js";
import { check } from "express-validator";
import { CheckErrors } from "../helpers/CheckErrors.js";

export const RouterProducto = Router();

RouterProducto.get('/',
VerificarJWT,
ObtenerProductos)

RouterProducto.post('/register/',
check('name','PLEASE INSERT A NAME').not().isEmpty(),
check('stock','PLEASE INSERT A STOCK').not().isEmpty(),
check('precio','PLEASE INSERT A PRODUCT PRICE').not().isEmpty(),
check('precio','PLEASE INSERT A VALID PRODUCT PRICE').isNumeric(),
check('stock','PLEASE INSERT A VALID PRODUCT STOCK').isNumeric(),
CheckErrors,
VerificarJWT,
RegistrarProductos)

RouterProducto.post('/register/prodxprov/',
check('ID_PRODUCTO','INSERT A VALID PRODUCT').not().isEmpty(),
check('CED_PROVEEDOR','INSERT A PROVEEDOR').not().isEmpty(),
CheckErrors,
VerificarJWT,
RegistrarProductosPorProveedor
)