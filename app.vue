<template>
  <NuxtPage />
</template>
<style>
.page-enter-active {
  transition: all 0.4s;
}

.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>