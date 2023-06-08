import { ConexionSQL } from "../DB/Conexion.js"


export const ExisteProducto = async (productos) => {
  try {
    const [existe] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [productos])
    if(existe.length==0){
        return false
    }else{
        return true
    }
  } catch (error) {
    return false;
  }
       
    


}