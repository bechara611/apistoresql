import Router from 'express'
import { GetObtenerTodosProveedores } from '../Controllers/Proveedores.js';

const RouterProveedor=Router();


RouterProveedor.get('/',GetObtenerTodosProveedores)

export default RouterProveedor;