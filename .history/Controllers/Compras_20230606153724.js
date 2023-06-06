export const obtenerCompras = async (req = request, res = response) => {
    try {

      //  const [ventas] = await ConexionSQL.query('SELECT * FROM VENTAS_GENERAL')
  
        return res.status(200).json({
            ok: true,
            msg: 'GET Compras',
           
            
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