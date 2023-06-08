import { ConexionSQL } from "../DB/Conexion.js"


export const ExisteProducto = async (productos = []) => {
    try {
        const pene = productos.map(async (elemento) => {
            const [existe2] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [elemento])
            if (existe2.length == 0) {
                return false
            }
        })
        console.log({pene})

    } catch (error) {
        return false;
    }




}