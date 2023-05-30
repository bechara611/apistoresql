import JWT from 'jsonwebtoken'

export const GenerarJWT = (id = '') => {
    return new Promise((resolve, reject) => {
        try {
            const token = JWT.sign(id, process.env.SECRET_KEY)
            resolve(token)
        } catch (error) {
            reject(error)
        }

    })
}