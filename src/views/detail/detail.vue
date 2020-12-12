<template>
  <div id="detail">
   <detail-nav-bar/>
  </div>
</template>

<script>
import DetailNavBar from '../detail/detailChild/detailNavBar'

export default{
  name:'detail',
  components:{
    DetailNavBar
  },
  data(){
    return{
      iid:null
    }
  },
  created(){
    console.log(this.$route.params.iid)
    this.iid = this.$route.params.iid
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
