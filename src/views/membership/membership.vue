<template>
  <div>
    <nav-bar class="membership">
      <div slot="center">
        您好，尊敬的会员
      </div>
    </nav-bar>
    <div class="card">
      <div class="cardcontent">
        <div class="header">会员卡</div>
        <div class="tier">普通会员</div>
        <div>13822120994</div>
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
  box-shadow: 0 1px 5px gray;
}
.header{
  padding-top: 10px;
  font-weight: bold;
  font-size: 18px;
}
.tier{
  font-size: 14px;
}
</style>
