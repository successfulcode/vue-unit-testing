<template>
<nav class="navbar is-link">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://logos-download.com/wp-content/uploads/2019/11/FunFair_FUN_Logo.png" alt="logo" height="28">
    </a>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link class="navbar-item" to="/about"  >About</router-link>
    </div>
  </div>

</nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  props: {
    msg: String,
  },
});
</script>
