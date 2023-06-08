import { ConexionSQL } from "../DB/Conexion.js"

export const ExisteProducto = async (productos = []) => {
    return new Promise(async (resolve, reject) => {
        let producto = true;
        producto = productos.forEach(async (codigo, index) => {
            const [existe] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [codigo])
console.log(existe.length)
            if (existe.length == 0) {


                return null;

            }

        })
        if (producto == null) {
          return  reject(null)
        }else{

            return resolve(true)
        }
    })
}