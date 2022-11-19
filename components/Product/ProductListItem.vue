<script lang="ts" setup>
import { PropType, onMounted } from "vue";

const { $metricEvents } = useNuxtApp()
const productItem = defineProps({
  product: Object as PropType<{ id: number; title: string; quantity: number }>,
});

const addProductEmit = defineEmits(["addProduct"]);

const addProduct = () => {
  addProductEmit("addProduct");
};

onMounted(() => {
  if(productItem.product) {
    $metricEvents.productDetail(productItem.product)
  }
})
</script>

<template>
  <article class="product__item">
    <h2>{{ product.title }}</h2>

    <div>{{ product.quantity }}</div>

    <button @click="addProduct">Add product</button>
  </article>
</template>

<style scoped>
.product__item {
  width: 60%;
  height: 400px;
  border: 1px solid black;
  border-radius: 20px;
}
</style>
