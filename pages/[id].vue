<script lang="ts" setup>
import { onMounted } from "vue";

const { $metricEvents } = useNuxtApp()

onMounted(() => {
  $metricEvents.pageView()
})
</script>

<template>{{ $route }}</template>