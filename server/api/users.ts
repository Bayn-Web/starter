export default defineEventHandler((event) => {
    const params = getQuery(event)
    const f: any[] = [];
    for (let i = 0; i < (params.times as number); i++) {
        f.push('user' + i);
    }
    return {
        list: f
    }
})