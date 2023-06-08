import { ConexionSQL } from "../DB/Conexion.js"
import { ExisteProducto } from "../helpers/ComprobarProductoExiste.js"

export const obtenerCompras = async (req = request, res = response) => {
    try {
        const [compras] = await ConexionSQL.query('SELECT * FROM COMPRAS_GENERAL')
        //  const [ventas] = await ConexionSQL.query('SELECT * FROM VENTAS_GENERAL')

        return res.status(200).json({
            ok: true,
            msg: 'GET Compras',
            compras

        })

        //TODO practica el hecho de agrupar todos los detalles por id

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}


export const obtenerComprasDetalle = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const [compras] = await ConexionSQL.query('SELECT * FROM COMPRAS_DETALLE WHERE ID_COMPRA=?', [id])

        return res.status(200).json({
            ok: true,
            msg: 'GET Compras detalle',
            id,
            compras

        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}



export const RegistrarCompra = async (req = request, res = response) => {
    try {
        const body = req.body;
        let respu;
        body.COD_PRODUCTO.forEach(async element => {
            respu = await ExisteProducto(element)
                .then((resp) => { return resp })
                .catch((error) => { return error })
        });
        console.log({respu})



        return res.status(400).json({
            ok: false,
            msg: 'PRODUCT NOT FOUND'
        })




        const [compraRegistrada] = await ConexionSQL.query('INSERT into COMPRAS_GENERAL(CED_PROVEEDOR,PAGADO_TOTAL,FECHA) VALUES (?,?,?)', [body.CED_PROVEEDOR, body.PAGADO_TOTAL, body.FECHA])

        body.COD_PRODUCTO.forEach(async (codigo, index) => {

            if (compraRegistrada.insertId) {

                await ConexionSQL.query('INSERT INTO COMPRAS_DETALLE(COD_PRODUCTO,CANTIDAD,PAGADO,ID_COMPRA) VALUES (?,?,?,?)', [codigo, body.CANTIDAD[index], body.PAGADO[index], compraRegistrada?.insertId])
            }
        });
        return res.status(200).json({
            ok: true,
            msg: 'POST REGISTRO DE  COMPRAS',
            body: { id: compraRegistrada?.insertId, ...body },

        })



    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: error?.sqlMessage || 'INTERNAL ERROR'
        })

    }
}