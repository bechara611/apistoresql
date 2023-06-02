import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.js";

export const GetObtenerTodosProveedores =async(req=request,res=response)=>{
    try {
        const [proveedores] = await ConexionSQL.query('SELECTs * FROM PROVEEDOR')
        return res.status(200).json({
        ok:true,
        msg:'GET PROVEEDORES',
        proveedores

    })
        
    } catch (error) {
        return res.status(400).json({
            ok:false,
            msg:'INTERNAL ERROR'
        })  
    }
}