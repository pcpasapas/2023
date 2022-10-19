<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/produits">Produits</RouterLink>
  </nav>
</template>

<style>
nav {
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  border-radius: 10px;
  border: 1px solid blueviolet;
  background-color: rgb(169, 96, 238);
}

nav a.router-link-exact-active {
  color: white;
  pointer-events: none;
  background-color: blue;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-radius: 50%;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}
</style>
