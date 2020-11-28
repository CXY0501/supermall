<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

// test test test
// TEST 3

<style>
  @import "./assets/css/base.css"
</style>