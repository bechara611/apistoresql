import { request, response } from "express";
import { validationResult } from "express-validator";


export const CheckErrors = (req=request,res=response,next) => {
 
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        throw new Error(errores)
    }else{
        next();
    }
}
