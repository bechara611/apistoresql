import { ConexionSQL } from "../DB/Conexion.js";

export const ExisteUsuario = async(email='')=>{
    return new Promise(async(resolve,reject)=>{
      const  [existe] = await ConexionSQL.query(`SELECT * from USUARIOS where CORREO=?`,[email]);
        if(existe.length>0){
             resolve(existe)
        }else{
            resolve(undefined)
        }
    })
}