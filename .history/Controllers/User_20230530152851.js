import { request, response } from "express";


export const UserGet = (req=request,res=response) => {

    res.status(200).json({
        ok:true,
        msg:'Get de obtener usuarios'
    })
}

export const UserLogin = (req=request,res=response) => {


    //TODO verifica en la BD que el usuario existe y que te devuelva el respectivo ID
    res.status(200).json({
        ok:true,
        msg:'Login success'
    })
}

export const UserRegister = (req=request,res=response) => {

    res.status(200).json({
        ok:true,
        msg:'Register user  success'
    })
}



