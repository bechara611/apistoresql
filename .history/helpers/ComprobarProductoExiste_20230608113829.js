import { ConexionSQL } from "../DB/Conexion.js"


export const ExisteProducto = async (productos = []) => {
    try {
        const consultas = productos.map(async (elemento) => {
            const [existe2] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [elemento])
           
            if (existe2.length == 0) {
                return false
               
            }
            
        })
        const resultado = await Promise.all(consultas)
        console.log(resultado)

    } catch (error) {
        console.log(error)
        return false;
    }




}