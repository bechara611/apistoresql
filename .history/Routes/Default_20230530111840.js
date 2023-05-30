import { Router, request, response } from "express";

const RouterDefault = Router();

RouterDefault.get('/',(req=request,res=response)=>{
    return res.status(400).json({
        ok:false,
        msg:'URL NOT FOUND IN OUR API'
    })
})

export {RouterDefault}