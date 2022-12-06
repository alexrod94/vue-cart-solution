<template>
  <Header />
  <section class="grid grid-cols-4 container mx-auto gap-6 mt-16">
    <div
      id="card"
      class="flex flex-col"
      v-for="{ name, ibu, image_url } in beers"
    >
      <!-- Se puede hacer sin destructuring -->
      <img :src="image_url" class="w-full h-[250px] object-cover" />
      <h3 class="text-xl mt-5">
        {{ name.length > 10 ? name.substring(0, 10) + "..." : name }}
      </h3>
      <p class="mt-2">{{ ibu }}€</p>
      <button class="text-white py-1 px-6 mt-3 w-full bg-green-500 rounded">
        Add to cart
      </button>
    </div>
  </section>
</template>

<script setup>
import Header from "./components/Header.vue";
// import Card from "./components/Card.vue";
import { ref } from "vue";
const beers = ref([]);

async function getBeer() {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const finalRes = await res.json();
  beers.value = finalRes;

  console.log(beers.value);
}

getBeer();
</script>

<style></style>
