import { ConexionSQL } from "../DB/Conexion"

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