import { request, response } from "express";

export const VerificarJWT =(req=request,res=response,next)=>{
const token =req.headers('token')
console.log(token)
next();
}