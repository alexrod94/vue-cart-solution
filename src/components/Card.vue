<template>
  <div id="card" class="flex flex-col">
    <img :src="item.img" class="w-full h-[250px] object-cover" />
    <h3 class="text-2xl mt-5">{{ item.name }}</h3>
    <p class="mt-2">{{ item.price }}€</p>
    <button class="text-white py-1 px-6 mt-3 w-full bg-green-500 rounded">
      Add to cart
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const item = ref({
  img: "",
  name: "",
  price: "",
});

async function getBeer() {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const finalRes = await res.json();

  item.value.img = finalRes[0].image_url;
  item.value.name = finalRes[0].name;
  item.value.price = finalRes[0].ibu;
}

getBeer();
</script>

<style></style>
