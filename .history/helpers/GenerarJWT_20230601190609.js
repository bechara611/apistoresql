import JWT from 'jsonwebtoken'

export const GenerarJWT = (id = '', email = '') => {
    return new Promise((resolve, reject) => {
        try {

            const token = JWT.sign({ id, email }, process.env.SECRET_KEY)
            resolve(token)
        } catch (error) {
            reject(error)
        }

    })
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

