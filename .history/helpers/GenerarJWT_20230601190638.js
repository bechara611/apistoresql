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


