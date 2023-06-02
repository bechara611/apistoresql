import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion";

export const GetObtenerTodosProveedores =async(req=request,res=response)=>{
    try {
        const [proveedores] = await ConexionSQL.query('SELECT * FROM PROVEEDOR')
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