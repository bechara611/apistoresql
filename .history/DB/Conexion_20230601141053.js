import { createPool } from "mysql2/promise";

export const ConexionSQL = createPool({
    port:3306,
    database:'apistore',
    host:'localhost',
    password:'123456',
    user:'root'
})