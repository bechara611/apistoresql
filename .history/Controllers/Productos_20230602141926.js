import { request, response } from "express";

export const ObtenerProductos=(req=request,res=response)=>{
return res.status(200).json({
    ok:true,
    msg:'get productos'
})
}