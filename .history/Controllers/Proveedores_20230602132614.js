import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.js";

export const GetObtenerTodosProveedores = async (req = request, res = response) => {
    try {
        const [proveedores] = await ConexionSQL.query('SELECT * FROM PROVEEDOR')
        return res.status(200).json({
            ok: true,
            proveedores
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })
    }
}


export const RegistrarProveedor = async (req = request, res = response) => {
    try {
       
        return res.status(200).json({
            ok: true,
            msg:'Register'
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })
    }
}