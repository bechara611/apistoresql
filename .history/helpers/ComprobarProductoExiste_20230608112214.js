import { ConexionSQL } from "../DB/Conexion.js"


export const ExisteProducto = async (productos = []) => {
    try {
        const existe = productos.map(async (elemento) => {
            const [existe] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [elemento])
            if (existe.length == 0) {
                return false
            }
        })
        console.log({existe})

    } catch (error) {
        return false;
    }




}