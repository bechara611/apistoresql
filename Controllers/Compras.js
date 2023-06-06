import { ConexionSQL } from "../DB/Conexion.js"

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
        const {id} = req.params

      //  const [ventas] = await ConexionSQL.query('SELECT * FROM VENTAS_GENERAL')
  
        return res.status(200).json({
            ok: true,
            msg: 'GET Compras detalle',
            id
            
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



export const RegistrarCompra = async (req = request, res = response) => {
    try {
        const body = req.body;
//TODO borrar lo de abajo
return res.status(200).json({
    ok: true,
    msg: 'POST REGISTRO DE  COMPRAS',
    body,
   
})

        const [ventaRegistrada] = await ConexionSQL.query('INSERT into VENTAS_GENERAL(CED_CLIENTE,PAGADO_TOTAL,FECHA) VALUES (?,?,?)', [body.CED_CLIENTE, body.PAGADO_TOTAL, body.FECHA])

        body.COD_PRODUCTO.forEach(async (codigo, index) => {
            if (ventaRegistrada.insertId) {

                await ConexionSQL.query('INSERT INTO VENTAS_DETALLE(COD_PRODUCTO,CANTIDAD,PAGADO,ID_VENTA) VALUES (?,?,?,?)', [codigo, body.CANTIDAD[index], body.PAGADO[index], ventaRegistrada?.insertId])
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