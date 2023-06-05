import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.js";

export const ObtenerVentas =async(req=request,res=response)=>{
    try {
        
        const [ventas] = await ConexionSQL.query('SELECT * FROM VENTAS_GENERAL')
        return res.status(200).json({
            ok: true,
            msg:'GET VENTAS',
            ventas
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}