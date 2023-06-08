import { ConexionSQL } from "../DB/Conexion.js"

export const ExisteProducto = async (productos = []) => {
    return new Promise((resolve, reject) => {
        let producto=undefined;
        productos.forEach(async (codigo, index) => {
            const [existe] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [codigo])
            console.log(existe)
            if (existe.length == 0) {

                producto=false

            }

        })
        resolve(producto)
    })
}