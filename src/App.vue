<template>
  <Overlay v-if="show" @click="showElement" />
  <header class="bg-gray-800 p-5 flex justify-center items-center relative">
    <a href="#" class="text-white mx-9">AllProducts</a>
    <a href="#" class="text-white mx-9">Smartphones</a>
    <a href="#" class="text-white mx-9">Notebooks</a>
    <button
      @click="showElement"
      class="text-white py-1 px-6 ml-28 bg-blue-500 rounded"
    >
      Cart
    </button>
  </header>
  <ProductCard v-if="show" />
  <section class="grid grid-cols-4 container mx-auto gap-6 mt-16">
    <Card v-for="beer in beers" :beer="beer" />
  </section>
</template>

<script setup>
// import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import ProductCard from "./components/ProductCard.vue";
import Overlay from "./components/Overlay.vue";
import { ref } from "vue";
const beers = ref([]);
const show = ref(false);

async function getBeer() {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const finalRes = await res.json();

  beers.value = finalRes;
}
getBeer();

function showElement() {
  show.value = !show.value;
}
</script>

<style></style>
