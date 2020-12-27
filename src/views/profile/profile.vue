<template>
  <div class="profile">
    <profile-top-bar/>
    <profile-2nd-bar/>
    <profile-3rd-bar/>
    <profile-4th-bar/>
  </div>
</template>

<script>

import ProfileTopBar from './profileChild/ProfileTopBar'
import Profile2ndBar from './profileChild/Profile2ndBar'
import Profile3rdBar from './profileChild/Profile3rdBar.vue'
import Profile4thBar from './profileChild/Profile4thBar.vue'

export default{
  name:'profile',
  data(){
    return{}
  },
  components:{
    ProfileTopBar,
    Profile2ndBar,
    Profile3rdBar,
    Profile4thBar
  },
  methods:{
  }
}
</script>

<style scoped>
.profile{
  background-color: #dddada;
  height: 100vh;
}
</style>
