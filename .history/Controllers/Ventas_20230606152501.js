import { request, response } from "express";
import { ConexionSQL } from "../DB/Conexion.js";

export const ObtenerVentas = async (req = request, res = response) => {
    try {

        const [ventas] = await ConexionSQL.query('SELECT * FROM VENTAS_GENERAL')
        return res.status(200).json({
            ok: true,
            msg: 'GET VENTAS',
            ventas
        })
        //TODO MOSTRAR LOS DETALLES Y ORDENARLOS POR ID

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}

export const ObtenerDetalle = async(req=request,res=response)=>{
    const {id}=req.params
    const [detalle] = await ConexionSQL.query('SELECT * FROM VENTAS_DETALLE WHERE ID_VENTA=?',[id])
try {
    return res.status(200).json({
        ok: true,
        msg: 'GET VENTAS DETALLE',
 
    })
} catch (error) {
    return res.status(400).json({
        ok: false,
        msg: error?.sqlMessage || 'INTERNAL ERROR'
    })

}
}

export const RegistrarVenta = async (req = request, res = response) => {
    try {
        const body = req.body;

        const [ventaRegistrada] = await ConexionSQL.query('INSERT into VENTAS_GENERAL(CED_CLIENTE,PAGADO_TOTAL,FECHA) VALUES (?,?,?)', [body.CED_CLIENTE, body.PAGADO_TOTAL, body.FECHA])

        body.COD_PRODUCTO.forEach(async (codigo,index) => {
            if (ventaRegistrada.insertId) {
            
                const [detalles] = await ConexionSQL.query('INSERT INTO VENTAS_DETALLE(COD_PRODUCTO,CANTIDAD,PAGADO,ID_VENTA) VALUES (?,?,?,?)', [codigo, body.CANTIDAD[index], body.PAGADO[index], ventaRegistrada?.insertId])
            }
        });

        return res.status(200).json({
            ok: true,
            msg: 'POST REGISTRO DE  VENTAS',
            body,
            ventaRegistrada
        })


    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}