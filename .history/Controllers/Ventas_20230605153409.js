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
        //TODO MOSTRAR LOS DETALLES Y ORDENARLOS POR ID

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}

export const RegistrarVenta =async(req=request,res=response)=>{
    try {
        
   
        return res.status(200).json({
            ok: true,
            msg:'POST REGISTRO DE  VENTAS',
            
        })
        //TODO MOSTRAR LOS DETALLES Y ORDENARLOS POR ID

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}