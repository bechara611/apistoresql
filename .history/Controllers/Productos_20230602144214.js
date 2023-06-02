import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.JS";

export const ObtenerProductos=async(req=request,res=response)=>{
    try {
        const [productos] = await ConexionSQL.query('SELECT * FROM PRODUCTO')
        return res.status(200).json({
            ok:true,
            productos
        })
        
    } catch (error) {
        
    }
}