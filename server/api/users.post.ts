import { getAllUser } from "~/mysql/actions/getAll";
export default defineEventHandler(async (event) => {
    const params = getQuery(event)
    const data = await getAllUser()
    return {
        list: data[0],
        time: params.times
    }
})