import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.js";

export const ObtenerProductos = async (req = request, res = response) => {
    try {
        const [productos] = await ConexionSQL.query('SELECT * FROM PRODUCTO')
        return res.status(200).json({
            ok: true,
            productos
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}

export const RegistrarProductos = async (req = request, res = response) => {
    try {
      
        const {precio=0,name='',stock=0} = req.body;
        //TODO debes hacer un check de que si el nombre existe o no
        const [productos] = await ConexionSQL.query('INSERT into PRODUCTO (NAME,STOCK,PRECIO) values (?,?,?)',[name.toLowerCase(),stock,precio])
        return res.status(200).json({
            ok: true,
            productos
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}

export const RegistrarProductosPorProveedor = async (req = request, res = response) => {
    try {
      
        const {ID_PRODUCTO=0,CED_PROVEEDOR=0} = req.body;
        //TODO debes hacer un check de que si el nombre existe o no

        const [existe] = await ConexionSQL.query('select * from prodxprov where COD_PRODUCTO=? AND CED_PROVEEDOR=?',[ID_PRODUCTO,CED_PROVEEDOR])

        if(existe.length>0){
            return res.status(400).json({
                ok: false,
                msg: 'PRODUCTO EXIST WITH THAT PROVIDER'
            })
        }
        const [resultado] = await ConexionSQL.query('INSERT into prodxprov values (?,?)',[ID_PRODUCTO,CED_PROVEEDOR])
        return res.status(200).json({
            ok: true,
            ID_PRODUCTO,
            CED_PROVEEDOR,
            resultado
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}

export const ObtenerProductosPorProveedor = async (req = request, res = response) => {
    try {
      
        const {ID_PRODUCTO=0} = req.body;
        //TODO debes hacer un check de que si el nombre existe o no

        const [existe] = await ConexionSQL.query('select * from prodxprov where COD_PRODUCTO=?',[ID_PRODUCTO])

        if(existe.length==0){
            return res.status(400).json({
                ok: false,
                msg: 'PRODUCTO NOT FOUND'
            })
        }
       
        return res.status(200).json({
            ok: true,
            existe
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}