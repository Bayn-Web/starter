import { createConnection } from "mysql2/promise"

const getconnection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'websec',
    port: 3306
})

export { getconnection }