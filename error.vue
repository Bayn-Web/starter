<template>
    <div class="flex justify-center align-center w-full h-full">
        <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
            <template #extra>
                <a-button type="primary" danger @click="handleError">Back Home</a-button>
            </template>
        </a-result>
    </div>
</template>
  
<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>