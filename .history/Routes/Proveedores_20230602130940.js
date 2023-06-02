import Router from 'express'
import { GetObtenerTodosProveedores } from '../Controllers/Proveedores';

const RouterProveedor=Router();


RouterProveedor.get('/',GetObtenerTodosProveedores)

export default RouterProveedor;