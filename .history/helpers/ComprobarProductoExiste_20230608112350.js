import { ConexionSQL } from "../DB/Conexion.js"


export const ExisteProducto = async (productos = []) => {
    try {
        const pene = productos.map( (elemento) => {
            const [existe2] =  ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [elemento])
            if (existe2.length == 0) {
                return false
            }
        })
        console.log({pene})

    } catch (error) {
        console.log(error)
        return false;
    }




}