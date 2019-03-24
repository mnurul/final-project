<template>
  <div id="app" :style="{ backgroundImage: 'url(' + require('../image/bg.png') + ')' }">
    <navbar></navbar>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/ui/navbar";

export default {
  name: "App",
  components: {
    navbar: navbar
  }
};
</script>

<style>
#app {
  height: 660px;
}
</style>
