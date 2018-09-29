<template>
  <div class="slide-bar">
     <div class="slide-item slide-wx">
       <i class="iconfont icon-changyonglogo28"></i><span>公众账号</span>
       <div class="slide-child">
         <p>关注微信公众号</p>
         <div><img src="static/images/pc_03.jpg"></div>
        </div>
     </div>
     <div class="slide-item slide-wb">
       <i class="iconfont icon-weibo"></i><span>公众账号</span>
       <div class="slide-child">
         <p>关注微博公众号</p>
         <div><img src="static/images/pc_03.jpg"></div>
        </div>
     </div>
     <div class="slide-item slide-rx">
       <i class="iconfont icon-kefurexian"></i><span>公众账号</span>
       <div class="slide-child">
         <p>关注热线电话</p>
         <div><img src="static/images/pc_03.jpg"></div>
        </div>
     </div>
     <div class="slide-item slide-back" v-if="backTop">
       <i class="iconfont icon-icon"></i><span>返回顶部</span>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      backTop:false
    }
  },
  created(){
    this.showBack()
  },
  methods:{
    showBack:function(){
      var _this = this;
      window.onscroll = function(){
        var t = document.documentElement.scrollTop||document.body.scrollTop;
        if(t>500){
          _this.backTop = true
        }else{
          _this.backTop = false
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-bar{
  position: fixed;
  right:-70px;
  top:200px;
  z-index: 1000;
}
.slide-item{
  padding:8px 10px;
  cursor:pointer;
  position: relative;
  right:0;
  transition: all 0.3s;
}
.slide-item:hover .slide-child{
  opacity:1;
}
.slide-item:hover{
  position: relative;
  right:70px;
}
.slide-wx{
  background:#7cbc63;
}
.slide-wb{
  background:#df4d49;
}
.slide-rx{
  background:#ec9523;
}
.slide-back{
  background:#4ec989;
}
.slide-item i{
  font-size:24px;
  color:#fff;
  vertical-align: middle;
}
.slide-item span{
  font-size:14px;
  text-align:center;
  color:#fff;
  margin-left:15px;
}
.slide-child{
  width:150px;
  padding-bottom:20px;
  background:#fff;
  position: absolute;
  right:118px;
  top:0;
  opacity: 0;
}
.slide-child p{
  font-size:12px;
  color:#666;
  text-align: center;
  line-height: 40px;
}
.slide-child div{
  width:100px;
  margin:0 auto;
  overflow: hidden;
}
</style>
