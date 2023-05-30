import { request, response } from "express";
import JWT from 'jsonwebtoken'
export const VerificarJWT =(req=request,res=response,next)=>{
const token =req.header('token')

const id = JWT.verify(token,process.env.SECRET_KEY)
console.log(id)
next();
}