<script setup>
import { RouterView } from "vue-router";
import logoComponent from "./components/logoComponent.vue";
import NavbarComponent from "./components/navbarComponent.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <logoComponent msg="Pc pas à pas" />
      <NavbarComponent />
    </div>
  </header>
  <RouterView />
</template>

<style></style>
