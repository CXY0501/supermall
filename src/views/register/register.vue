<template>
  <div class="register">
    <nav-bar class="registerBar">
      <div slot="center" class="title">
          欢迎注册
      </div>
    </nav-bar>
    <div class="registerDetails">
      <div class="inputInfo">
        <span>用户名</span>
        <input type="text" placeholder="您的用户名和登录名">
      </div>
      <div class="inputInfo">
        <span>设置密码</span>
        <input type="text" placeholder="建议至少使用两种字符组合">
      </div>
      <div class="inputInfo">
        <span>确认密码</span>
        <input type="text" placeholder="再次确认密码">
      </div>
      <div class="inputInfo">
        <span>中国</span>
        <input type="text" placeholder="建议使用常用手机">
      </div>
      <div class="inputInfo">
        <span>验证码</span>
        <input type="text" placeholder="请输入验证码">
      </div>
      <div class="terms">
        <input type="checkbox">
        <span>阅读并同意<a href="#">《用户注册协议》</a><a href="#">《隐私政策》</a></span>
      </div>
      <button>立即注册</button>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default{
  name:'Register',
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
.registerBar{
  background-color: var(--color-tint);
  color: #fff;
}
.registerDetails{
  padding: 50px;
}
.inputInfo{
  border: 1px #e1e1e1 solid;
  height: 40px;
  line-height: 40px;
}
.inputInfo span{
  display: inline-block;
  width: 100px;
  text-align: center;
}
.inputInfo input{
  height: 36px;
  border: none;
}
button{
  width: 273px;
  height: 40px;
  background-color: var(--color-tint);
  color: #fff;
  border: none;
}
.terms{
  font-size:13px
}
</style>
