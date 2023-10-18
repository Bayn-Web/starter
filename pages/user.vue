<template>
    <div>
        <h1 @click="query(times++)">About page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <div v-for="item in userList.list">
            <span>item</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const userList = reactive<{ list: any[] }>({ list: [] })
const times = ref(0)
const query = async (times: number) => {
    $fetch('/api/users', {
        method: "get",
        params: {
            times: times
        }
    }).then(res => {
        console.log(res)
        userList.list = res.list
    })
}
query(times.value);
</script>

<style scoped></style>