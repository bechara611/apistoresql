import { ConexionSQL } from "../DB/Conexion.js"

export const ExisteProducto = async (productos = []) => {
    return new Promise(async(resolve, reject) => {
        let producto = undefined;
        productos.forEach(async (codigo, index) => {
            const [existe] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [codigo])

            if (existe.length == 0) {
              
              
               return reject(false)

            }

        })
       return resolve(true)
    })
}