<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="">
    <h1 class="">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  top: -10px;
  text-align: center;
  color: blueviolet;
  font-weight: 900;
  background-color: bisque;
  border-radius: 100%;
}
</style>
