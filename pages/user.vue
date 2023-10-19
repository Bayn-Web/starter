<template>
    <div>
        <h1 class="cursor-pointer">About page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <a-list v-for="item in userList.list">
            <a-list-item>
                <a-list-item-meta :description="item.name">
                    <template #title>
                        <a>{{ item }}</a>
                    </template>
                    <template #avatar>
                        <a-avatar src="https://joeschmoe.io/api/v1/random" />
                    </template>
                </a-list-item-meta></a-list-item>
        </a-list>
        <a-button @click="query(times++)" danger>123</a-button>
    </div>
</template>

<script lang="ts" setup>
const userList = reactive<{ list: any[] }>({ list: [] })
const times = useState<number>("count", () => 0)
const query = async (times: number) => {
    $fetch<{ list: any[] }>('/api/users', {
        method: "get",
        params: {
            times: times
        }
    }).then(res => {
        userList.list = res.list
    })
}
query(times.value);
</script>

<style scoped></style>