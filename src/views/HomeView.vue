<template>
  <div class="home">
    <SideNav  class="sidenav"/>
    <router-view class="content"></router-view>
    <SideNavBottom />
  </div>
</template>

<script setup>
import SideNav from '@/components/SideNav.vue'
import SideNavBottom from '@/components/SideNavBottom.vue'
</script>

<style scoped>
.home {
  display: grid;
  grid-template-areas:
    "sidenav content"
    "sidebottom content";
  grid-template-columns: 420px 1fr;
  grid-template-rows: 120px;
  gap: 7px;
  margin: 0;
  padding: 0;
  background: rgb(0, 0, 0);
  height: 100vh;
}

.sidenav {
  grid-area: sidenav;
}

.content {
  grid-area: content;
}
</style>
