import { request, response } from "express";
import JWT from 'jsonwebtoken'


export const VerificarJWT = (req = request, res = response, next) => {
    try {
        const token = req.header('token')

        const id = JWT.verify(token, process.env.SECRET_KEY)
        req.idUser=id
        next();
    } catch (error) {
        return res.status(400).json({
            ok:false,
            msg:'INVALID TOKEN'
        })
    }

}