<template>
    <div class="p-3">
        HOME
        <NuxtLink to="/user">USER</NuxtLink>
        status {{ useState("count", () => 0) }}
        <a-button danger>123</a-button>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>