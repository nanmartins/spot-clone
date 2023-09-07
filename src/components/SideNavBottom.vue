<template>
  <div class="side-bottom">
    <div class="side-bottom-container">

      <div class="side-b-header">
        <span class="side-b-header-left" @click="showConsole">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
          Sua Biblioteca
        </span>

        <div class="side-b-header-right">
          <svg class="icons-side-b-header" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>

          <svg class="icon-no-pad icons-side-b-header" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </div>
      </div>

      <div>
        <ul class="side-b-tags-container">
          <li class="side-b-tags-tags">Playlists</li>
          <li class="side-b-tags-tags">Artistas</li>
          <li class="side-b-tags-tags">Álbuns</li>
          <li class="side-b-tags-tags">Podcasts</li>
        </ul>
      </div>

      <div class="side-b-search-container">
        <svg class="icon-no-pad" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>

        <div class="side-b-search-recents">
          <span>Recentes</span>
          <svg class="icon-ml" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showConsole = ref(() => {
  console.log('Hi')
})
</script>

<style scoped>

/* ICONS */
.icon {
  fill: rgb(145, 145, 145);
  margin-right: 18px;
}

.icon-no-pad {
  fill: rgb(145, 145, 145);
}

.icons-side-b-header {
  fill: rgb(145, 145, 145);
  padding: 7px;
  margin: 0 5px;
}

.icon-ml {
  fill: rgb(145, 145, 145);
  margin-left: 10px;
}

/* MAIN CONTAINER */
.side-bottom {
  display: flex;
  background: rgb(24, 24, 24);
  color: rgb(145, 145, 145);
  border-radius: 7px;
  padding: 6px 12px;
  max-width: 400px;
}

.side-bottom-container {
  width: 400px;
}

/* SIDE BOTTOM HEADER  */
.side-b-header {
  display: flex;
  justify-content: space-between;
}

.side-b-header-left {
  display: flex;
  align-items: center;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
}
.side-b-header-left:hover {
  color: rgb(210, 210, 210);
}

.side-b-header-left:hover svg {
  fill: rgb(210, 210, 210);
}

.side-b-header-right {
  display: flex;
  align-items: center;
  /* padding: 10px; */
  box-sizing: border-box;
}

.icons-side-b-header:hover {
  fill: rgb(210, 210, 210);
  background: rgba(35, 35, 35, 0.607);
  border-radius: 50%;
  padding: 7px;
}

/* SIDE BOTTOM TAGS */
.side-b-tags-container {
  list-style: none;
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 10px 0 10px 0;
}

.side-b-tags-tags {
  background: rgb(42, 42, 42);
  color: rgb(210, 210, 210);
  padding: 4px 12px;
  border-radius: 25px;
  font-size: 0.875rem;
  cursor: pointer;
}

.side-b-tags-tags:hover {
  background: rgb(52, 52, 52);
}

/* SIDE BOTTOM SEARCH */
.side-b-search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
}

.side-b-search-container .icon-no-pad {
  padding: 7px;
}

.side-b-search-container:hover .icon-no-pad {
  background: rgb(42, 42, 42, 0.7);
  border-radius: 50%;
  fill: rgb(210, 210, 210);
}

.side-b-search-container span {
  font-size: 0.875rem;
}

.side-b-search-recents {
  display: flex;
  padding-right: 10px;
}

.side-b-search-recents:hover {
  color: rgb(210, 210, 210);
}

.side-b-search-recents:hover svg {
  fill: rgb(210, 210, 210);
}
.icon-ml {
  margin-left: 10px;
}
</style>
