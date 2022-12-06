<template>
  <button class="text-white py-1 px-6 mt-3 w-full bg-green-500 rounded">
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style></style>
