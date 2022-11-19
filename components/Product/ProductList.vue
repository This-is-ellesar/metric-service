<script lang="ts" setup>
import ProductListItem from "@/components/Product/ProductListItem.vue";
import {Product} from "~/types/components/product.types";
import {Ref} from "@vue/reactivity";

const { $metricEvents } = useNuxtApp()
const productList: Ref<Product[]> = ref([
  { id: 1, title: "Кроссовки", quantity: 1 },
  { id: 2, title: "Толствовка", quantity: 2 },
  { id: 3, title: "Носки", quantity: 15 },
]);

const addProduct = (id: number) => {
  $metricEvents.addProduct(id)
};
</script>

<template>
  <section class="product__list">
    <product-list-item
      v-for="product in productList"
      :key="product.id"
      :product="product"
      @addProduct="addProduct(product.id)"
    />
  </section>
</template>

<style scoped>
.product__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
</style>
