import JWT from 'jsonwebtoken'

export const GenerarJWT = (id = '',email='') => {
    return new Promise((resolve, reject) => {
        try {
            
            const token = JWT.sign({id,email}, process.env.SECRET_KEY)
            resolve(token)
        } catch (error) {
            reject(error)
        }

    })
}

export const LeerJWTMetodo = (token) => {
   try {
    const payload = JWT.verify(token,process.env.SECRET_KEY)
    if(payload){
        console.log({payload})
    }else{
        console.log({error:true})
    }
   } catch (error) {
    console.log(error)
   }
}

export const JWTMiddleware = (id = '',email='') => {
    return new Promise((resolve, reject) => {
        try {
            console.log({id,email})
            const token = JWT.sign({id,email}, process.env.SECRET_KEY)
            resolve(token)
        } catch (error) {
            reject(error)
        }

    })
}