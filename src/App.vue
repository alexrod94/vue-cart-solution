<template>
  <Header />
  <section class="grid grid-cols-4 container mx-auto gap-6 mt-16">
    <Card v-for="beer in beers" :beer="beer" :nombre="name" />
  </section>
</template>

<script setup>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import { ref } from "vue";
const beers = ref([]);
const name = ref("Alex");

async function getBeer() {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const finalRes = await res.json();

  beers.value = finalRes;

  console.log(beers.value);
}

getBeer();
</script>

<style></style>
