<template>
  <div>
    <nav-bar class="membership">
      <div slot="center">
        您好，尊敬的会员
      </div>
    </nav-bar>
    <div class="card">
      <div class="cardcontent">
        会员卡 - 普通会员
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default{
  name:'Membership',
  data(){
    return{}
  },
  components:{
    NavBar
  },
  methods:{
  }
}
</script>

<style scoped>
.membership{
  background-color: var(--color-tint);
  color:#fff
}
.card{
  margin-top: 100px;
  margin-left: calc(100vw * 0.1);
}
.cardcontent{
  height: 200px;
  width: calc(100vw * 0.8);
  background-color: var(--color-tint);
  border-radius: 20px;
  color:#fff;
  text-align: center;
}
</style>
