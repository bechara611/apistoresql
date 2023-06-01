import { request, response } from "express";
import JWT from 'jsonwebtoken'


export const VerificarJWT = (req = request, res = response, next) => {
    try {
        const token = req.header('token')

        const payload = JWT.verify(token, process.env.SECRET_KEY)
        req.idUser=payload.id;
        req.email=payload.email;
        req.iat=payload.iat;
        next();
    } catch (error) {
        return res.status(400).json({
            ok:false,
            msg:'INVALID TOKEN'
        })
    }

}


export const LeerJWTMetodo = async (token) => {
    try {
        const payload = JWT.verify(token, process.env.SECRET_KEY)
        if (payload) {
            return payload;
        }
    } catch (error) {
        return null;
    }
}
