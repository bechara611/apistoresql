import { request, response } from "express";

export const getClientes=(req=request,res=response)=>{


    res.status(200).json({
        ok:true,
        msg:'GET CLIENTES'
    })


}

export const postClientes=(req=request,res=response)=>{
    res.status(200).json({
        ok:true,
        msg:'POST CLIENTES'
    })
}