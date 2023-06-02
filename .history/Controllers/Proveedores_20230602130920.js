import { request, response } from "express";

export const GetObtenerTodosProveedores =(req=request,res=response)=>{
    return res.status(200).json({
        ok:true,
        msg:'GET PROVEEDORES'
    })
}