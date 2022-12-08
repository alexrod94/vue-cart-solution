<template>
  <div id="card" class="flex flex-col">
    <!-- Se puede hacer sin destructuring -->
    <img :src="beer.image_url" class="w-full h-[250px] object-cover" />

    <h3 class="text-xl mt-5">
      {{
        beer.name.length > 10 ? beer.name.substring(0, 10) + "..." : beer.name
      }}
    </h3>
    <p class="text-sm">{{ beer.description.substring(0, 15) + "..." }}</p>
    <p class="mt-2">{{ beer.ibu }}€</p>
    <Button :text="'Add to cart'" @addToCart="addToCart" />
  </div>
</template>

<script setup>
import Button from "./Button.vue";
const props = defineProps(["beer"]);
const emits = defineEmits(["addProduct"]);

function addToCart() {
  emits("addProduct", props.beer);
}
</script>

<style></style>
