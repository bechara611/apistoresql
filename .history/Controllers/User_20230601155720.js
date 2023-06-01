import { request, response } from "express";
import { GenerarJWT } from "../helpers/GenerarJWT.js";
import { ConexionSQL } from "../DB/Conexion.js";
import { ExisteUsuario } from "../helpers/PeticionesUsuales.js";


export const UserGet = async (req = request, res = response) => {

    try {
        const [usuarios] = await ConexionSQL.query('SELECT * FROM USUARIOS');
        return res.status(200).json({
            ok: true,
            msg: 'Get de obtener usuarios',
            usuarios
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }

}

export const UserLogin = async (req = request, res = response) => {
    const { email, password } = req.body;


    //TODO verifica en la BD que el usuario existe y que te devuelva el respectivo ID
   //?Comprobamos si existe el usuario
   const existe = await ExisteUsuario(email);

   if (!existe) {
       return res.status(400).json({
           ok: false,
           msg: 'USER NOT FOUND'
       })
   }
   console.log(existe)
   console.log(password)
   if(existe.PASSWORD==password){
    const token = await GenerarJWT(existe.COD_USUARIO);
    return res.status(200).json({
        ok: true,
        msg: 'Login success',
        token
    })
   }else{
    return res.status(400).json({
        ok: false,
        msg: 'INCORRECT PASSWORD'
    })
   }

 

   
}

export const UserRegister = async (req = request, res = response) => {
    try {
        const { name, email, password, rol } = req.body;

        //?Comprobamos si existe el usuario
        const existe = await ExisteUsuario(email);
        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: 'USER ALREADY EXIST'
            })
        }

        //? Ya que no existe lo registramos.

        const [usuarioRegistrado] = await ConexionSQL.query('INSERT into USUARIOS (NAME,CORREO,ROL,PASSWORD) VALUES (?,?,?,?)', [name, email, rol, password])

        return res.status(200).json({
            ok: true,
            msg: 'Register user  success',
            usuario: { ID: usuarioRegistrado.insertId, name, email }
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }

}



