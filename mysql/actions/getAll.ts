import { getconnection } from "~/mysql/settings";

const makeConnect = async (sql: string, params?: any[]) => {
    const connection = await getconnection
    return connection.execute(sql, params);
}

export const getAllUser = () => makeConnect('SELECT * FROM user', [])

export const getOneUser = (id: number) => makeConnect("SELECT * FROM user where id=?", [id])