import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.js";

export const getClientes=async(req=request,res=response)=>{

    try {
        const [clientes] = await ConexionSQL.query('SELECT * FROM CLIENTE');
        return res.status(200).json({
            ok:true,
            msg:'GET CLIENTES',
            clientes
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok:false,
            msg:'INTERNAL ERROR'
        })
    }



}

export const postClientes=(req=request,res=response)=>{
    res.status(200).json({
        ok:true,
        msg:'POST CLIENTES'
    })
}