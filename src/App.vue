<template>
  <div id="app">
    <header-view></header-view>
    <home-view/>
  </div>
</template>

<script>
import headerView from './components/header.vue';
import homeView from './views/Home.vue';

export default {
  components:{
    homeView,
    headerView
  }
}
</script>


<style>
</style>
