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

export const postClientes = async (req = request, res = response) => {
    try {
        const { name, cedula, direccion } = req.body;

        const usuarioRegistrado = await ConexionSQL.query('INSERT into CLIENTE values (?,?,?)', [cedula, name, direccion])
        return res.status(200).json({
            ok: true,
            msg: 'POST CLIENTES',
            Usuario: req.idUser,
            Cliente_cedula: cedula,
            Cliente_name: name
        })

    } catch (error) {

        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })
    }
}


export const updateClientes = async (req = request, res = response) => {
    try {
        const body = req.body
        const {ced} = req.params
        return res.status(200).json({
            ok: true,
            msg: 'UPDATE CLIENTES',
            body
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })
    }
}