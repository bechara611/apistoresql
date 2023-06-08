import { request, response } from "express";
import { validationResult } from "express-validator";
import { ConexionSQL } from "../DB/Conexion.js";


export const CheckErrors = (req=request,res=response,next) => {
 
    const errores = validationResult(req); 
  
    if(!errores.isEmpty()){
     return res.status(404).json({
        ok:false,
        msg:{...errores}
     })
    }else{
        next();
    }
}



export const ExisteProducto = async (productos = []) => {
        const consultas = productos.map(async (elemento) => {
            const [existe2] = await ConexionSQL.query('SELECT * FROM PRODUCTO WHERE COD_PRODUCTO=?', [elemento])
           
            if (existe2.length == 0) {
                return false;
               
            }
            console.log(await Promise.all(consultas))
        })
      return true;

    




}
