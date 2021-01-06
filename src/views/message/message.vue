<template>
  <div class="message">
    <nav-bar>
      <div slot="left" class="title">
          消息
      </div>
      <div slot="center" class="title">
          通讯录
      </div>
      <div slot="right" class="title">
          添加
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default{
  name:'message',
  data(){
    return{}
  },
  components:{
    NavBar
  },
  methods:{
    message(){
      this.$router.replace('./message')
    }
  }
}
</script>

<style scoped>
</style>
