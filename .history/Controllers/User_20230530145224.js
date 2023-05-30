import { request, response } from "express";


export const UserGet = (req=request,res=response) => {

    res.status(200).json({
        ok:true,
        msg:'Get de obtener usuarios'
    })
}

export const UserLogin = (req=request,res=response) => {

    res.status(200).json({
        ok:true,
        msg:'Login success'
    })
}
