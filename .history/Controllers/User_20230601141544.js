import { request, response } from "express";
import { GenerarJWT } from "../helpers/GenerarJWT.js";
import { ConexionSQL } from "../DB/Conexion.js";


export const UserGet =async (req=request,res=response) => {

    try {
        const [usuarios] = await ConexionSQL.query('SELECT * FROM USUARIOS');
        return res.status(200).json({
            ok:true,
            msg:'Get de obtener usuarios',
            usuarios
        })    
    } catch (error) {
        return res.status(200).json({
            ok:false,
            msg:error
        })    
    }
    
}

export const UserLogin =async (req=request,res=response) => {


    //TODO verifica en la BD que el usuario existe y que te devuelva el respectivo ID


    const token = await GenerarJWT(3);

    res.status(200).json({
        ok:true,
        msg:'Login success',
        token
    })
}

export const UserRegister = (req=request,res=response) => {

    res.status(200).json({
        ok:true,
        msg:'Register user  success'
    })
}



