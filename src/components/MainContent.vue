<template>
  <div class="main-content">
    <h1 @click="console.log(token)">Main Content</h1>
    <input v-model="searchQuery" placeholder="Pesquisar...">
    <button @click="search">Pesquisar</button>
    <ul>
      <li v-for="track in tracks" :key="track.id">{{ track.name }}</li>
    </ul>
  </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue'
// import { searchTracks } from '../../api'
// import getAccessToken from '../../auth'

// const searchQuery = ref('');
// const tracks = ref([]);
// let token = null;

// const search = async () => {
//   try {
//     if (!token) {
//       token = await getAccessToken(); // Obtém o token de acesso se ainda não o tiver
//     }

//     const query = searchQuery.value;
//     const searchResults = await searchTracks(query, token);
//     tracks.value = searchResults;
//   } catch (error) {
//   console.error('Erro ao buscar músicas:', error);
//   }
// };

// onMounted(() => {
//   // Execute a pesquisa inicial ou outras operações que exigem autenticação aqui
//   console.log(token)
// });

import { ref, onMounted } from 'vue';
import { searchTracks } from '../../api.js';
import { getToken } from '../../auth.js';

const searchQuery = ref('');
const tracks = ref([]);
let token = null;

onMounted(async () => {
  // Obtém o token de acesso quando o componente é montado
  try {
    token = await getToken();
  } catch (error) {
    console.error('Erro ao obter token de acesso:', error);
  }
});

const search = async () => {
  try {
    if (!token) {
      console.error('Token de acesso não está disponível.');
      return;
    }

    const query = searchQuery.value;
    const tracksData = await searchTracks(token, query);
    tracks.value = tracksData;
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
  }
};

</script>

<style scoped>

.main-content {
  background: rgb(24, 24, 24);
  color: rgb(197, 197, 197);
  border-radius: 7px;
}
</style>
