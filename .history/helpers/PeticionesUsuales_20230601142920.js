import { ConexionSQL } from "../DB/Conexion.js";

export const ExisteUsuario = async(email='')=>{
    return new Promise(async(resolve,reject)=>{
        existe = await ConexionSQL.query(`SELECT * from USUARIOS where CORREO=?`,[email]);
        if(existe){
            return existe
        }else{
            return undefined
        }
    })
}