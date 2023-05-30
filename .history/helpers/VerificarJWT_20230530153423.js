import { request, response } from "express";

export const VerificarJWT =(req=request,res=response,next)=>{
const token =req.header('token')
console.log(token)
next();
}