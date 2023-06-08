import { ConexionSQL } from "../DB/Conexion.js"


export const ExisteProducto = async (productos) => {
    return new Promise(async (resolve, reject) => {
        const [existe] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [productos])
        if(existe.length==0){
            reject(false)
        }else{
            resolve(true)
        }
    })


}