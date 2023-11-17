<template>
  <body>
    <div class="button-container">
      <!-- Premier bouton redirigeant vers "/testgrid.vue" -->
      <router-link to="/testgrid">
        <button class="custom-button">Bouton 1</button>
      </router-link>

      <!-- Deuxième bouton redirigeant vers "/admin.vue" -->
      <router-link to="/admin">
        <button class="custom-button">Bouton 2</button>
      </router-link>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.button-container {
  text-align: center;
}

.custom-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
}
</style>