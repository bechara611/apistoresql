import { request, response } from "express";
import { validationResult } from "express-validator";


export const CheckErrors = (req=request,res=response,next) => {
 
    const errores = validationResult(req);

        console.log(  errores.errors)
      
    
  
    if(!errores.isEmpty()){
     return res.status(404).json({
        ok:false,
        msg:{...errores}
     })
    }else{
        next();
    }
}
