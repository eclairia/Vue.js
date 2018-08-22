<template>
  <div id="app">
    <div class="sidebar">
      <router-link :to="{ name: 'root' }">Page d'accueil</router-link>
      <router-link :to="{ name: 'pageb' }">Page B</router-link>
      <router-link :to="{ name: 'article', params: {id: 1} }">Article 1</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>