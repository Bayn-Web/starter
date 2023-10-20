<template>
    <div>
        {{ data }}
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data } = useAsyncData(route.params.id.toString(), () => {
    return $fetch('/api/user', {
        method: "GET",
        params:{
            id :route.params.id
        }
    })
}, {
    lazy: true,
    default: () => undefined
})

</script>

<style scoped></style>