<template>
    <div class="carte">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }} €</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .carte {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>