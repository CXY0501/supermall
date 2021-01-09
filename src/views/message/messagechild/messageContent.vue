<template>
  <div class="messageContent">
      <nav-bar class="bar" v-for="(item,index) in messages" :key="index">
        <div slot="left" class="logo">
          <img :src="item.img" alt="">
        </div>
        <div slot="center" class="content">
          <div class="main">{{item.main}}</div>
          <div class="detail">{{item.sub}}</div>
        </div>
        <div slot="right" class="reminder">
          <div class="number">{{item.number}}</div>
        </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'

export default{
  name:'MessageContent',
  data(){
    return{
      messages:[
        {
          img: require("../../../assets/img/message/promotion.png"),
          main:'活动优惠',
          sub:'亲，新款上了,来看看有没有您需要的？',
          number:3
        },
        {
          img: require('../../../assets/img/message/parcel.png'),
          main:'xx物流',
          sub:'包裹已发出，查看送达时间',
          number:2
        },
        {
          img: require('../../../assets/img/message/FIRE.png'),
          main:'xx官方旗舰店',
          sub:'[专属客服为您服务]',
          number:20
        },
        {
          img: require("../../../assets/img/message/promotion.png"),
          main:'活动优惠',
          sub:'亲，新款上了,来看看有没有您需要的？',
          number:3
        },
        {
          img: require('../../../assets/img/message/parcel.png'),
          main:'xx物流',
          sub:'包裹已发出，查看送达时间',
          number:2
        },
        {
          img: require('../../../assets/img/message/FIRE.png'),
          main:'xx官方旗舰店',
          sub:'[专属客服为您服务]',
          number:5
        },
         {
          img: require("../../../assets/img/message/promotion.png"),
          main:'活动优惠',
          sub:'亲，新款上了,来看看有没有您需要的？',
          number:3
        },
        {
          img: require('../../../assets/img/message/parcel.png'),
          main:'xx物流',
          sub:'包裹已发出，查看送达时间',
          number:2
        },
        {
          img: require('../../../assets/img/message/FIRE.png'),
          main:'xx官方旗舰店',
          sub:'[专属客服为您服务]',
          number:20
        },
        {
          img: require("../../../assets/img/message/promotion.png"),
          main:'活动优惠',
          sub:'亲，新款上了,来看看有没有您需要的？',
          number:3
        },
        {
          img: require('../../../assets/img/message/parcel.png'),
          main:'xx物流',
          sub:'包裹已发出，查看送达时间',
          number:2
        },
        {
          img: require('../../../assets/img/message/FIRE.png'),
          main:'xx官方旗舰店',
          sub:'[专属客服为您服务]',
          number:5
        }
      ]
    }
  },
  components:{
    NavBar
  },
  methods:{
  }
}
</script>

<style scoped>
.bar{
  margin-top: 15px;
  height: 60px;
}
.logo img{
  height: 30px;
}
.number{
  height: 25px;
  width: 25px;
  background-color: var(--color-high-text);
  border-radius:20px;
  color: #fff;
  font-size: 18px;
  line-height: 25px;
}
.center div{
  text-align: left;
  line-height: 20px;
}
.main{
  font-size: 18px;
}
.detail{
  font-size: 14px;
  color: grey;
}
</style>
