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

<style>
  @import "./assets/css/base.css"
</style>