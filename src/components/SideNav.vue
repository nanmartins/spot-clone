<template>
  <div class="side-nav">
    <ul>
      <li>
        <router-link to="/" class="side-nav-links">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            Início
        </router-link>
      </li>

      <li>
        <router-link to="/search" class="side-nav-links">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            Buscar
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>

.icon {
  fill: rgb(145, 145, 145);
  padding-right: 18px;
}


.side-nav {
  display: flex;
  align-content: flex-start;
  margin: 0;
  padding: 0;
}

.side-nav-links {
  text-decoration: none;
  color: rgb(145, 145, 145);
  display: flex;
  align-items: center;
  height: 40px;
  padding: 4px 12px;
}

.side-nav-links:hover {
  color: rgb(210, 210, 210);
}

.side-nav-links:hover svg {
  fill: rgb(210, 210, 210);
}


ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(24, 24, 24);
  color: rgb(197,197,197);
  list-style: none;
  max-width: 400px;
  width: 100%;
  height: 90px;
  padding: 10px;
  margin: 0;
  border-radius: 7px;
  font-weight: 500;
}

</style>
