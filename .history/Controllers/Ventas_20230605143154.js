import { request, response } from "express";

export const ObtenerVentas =(req=request,res=response)=>{
    try {
     
        return res.status(200).json({
            ok: true,
            msg:'GET VENTAS'
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}