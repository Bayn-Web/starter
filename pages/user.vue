<template>
    <div>
        <h1 class="cursor-pointer">User page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
        <a-button :loading="loading" @click="doExecute()">refresh</a-button>
        <a-list :data-source="data.list">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta :description="item.name">
                        <template #title>
                            <NuxtLink :to="'/userPage/'+item.id">{{ item.name }}</NuxtLink>
                        </template>
                        <template #avatar>
                            <a-avatar src="/pic/th.jpg" />
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
        <img class="h-9 w-9 rounded object-cover" :src="pic">
    </div>
</template>

<script lang="ts" setup>
import pic from "/pic/th.jpg"

const loading = ref(false)

const { data, execute } = await useLazyFetch<{ list: any[] }>(
    '/api/users',
    {
        method: "post",
        default: () => { return { list: [] } }
    }
)

const doExecute = async () => {
    loading.value = true
    await execute();
    loading.value = false
}
</script>