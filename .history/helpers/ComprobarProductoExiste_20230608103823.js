import { ConexionSQL } from "../DB/Conexion.js"

export const ExisteProducto = async (productos = []) => {
    return new Promise((resolve, reject) => {
        productos.forEach(async (codigo, index) => {
            const [existe] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [codigo])
            if (existe.length == 0) {
                resolve(null)
                

            }

        })
        resolve(true)
    })
}