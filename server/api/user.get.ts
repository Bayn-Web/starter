import { getOneUser } from "~/mysql/actions/getAll";
export default defineEventHandler(async (event) => {
    const params = getQuery<{ id: number }>(event)
    const data = await getOneUser(params.id)
    return {
        list: data[0],
        time: new Date
    }
})