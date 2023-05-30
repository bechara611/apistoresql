import { request, response } from "express";


export const UserGet = (req=request,res=response) => {

    res.status(200).json({
        ok:true,
        msg:'Get de obtener usuarios'
    })
}
