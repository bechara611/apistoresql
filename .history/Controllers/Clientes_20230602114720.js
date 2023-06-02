import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.js";

export const getClientes = async (req = request, res = response) => {

    try {
        const [clientes] = await ConexionSQL.query('SELECT * FROM CLIENTE');
        return res.status(200).json({
            ok: true,
            msg: 'GET CLIENTES',
            clientes
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: 'INTERNAL ERROR'
        })
    }



}

export const postClientes =async (req = request, res = response) => {
    try {
        const {name,cedula,direccion} = req.body;

        const usuarioRegistrado = await ConexionSQL.query('INSERT into CLIENTE values (?,?,?)',[cedula,name,direccion])
        return res.status(200).json({
            ok: true,
            msg: 'POST CLIENTES',
            idsuser:req.idUser,
            usuarioRegistrado
        })

    } catch (error) {

        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })
    }
}