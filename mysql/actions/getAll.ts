import { getconnection } from "~/mysql/settings";

export const getAllUser = async () => {
    const connection = await getconnection
    return connection.execute('SELECT * FROM `user`');
}