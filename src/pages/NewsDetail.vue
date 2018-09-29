<template>
<div class="news-detail">
  <div class="container clearfix">
     <div class="news-left">
       <p class="news-dpath"><router-link  class="news-dpath1" to="/Home">首页</router-link>><router-link  class="news-dpath1" :to="{name:'NewsBulletin'}">新闻公告</router-link>>历史记录</p>
       <h2 class="news-dtitle">{{curObject.title}}</h2>
       <p class="bulletin-item-sundry">
        <i>{{curObject.date}}</i>
        <i class="iconfont icon-yanjing"></i>{{curObject.num}}
        <i class="iconfont icon-lishijilu"></i>历史记录
       </p>
       <p class="news-dtext">{{curObject.text}}</p>
     </div>
     <div class="bulletin-rigt">
            <h2 class="bulletin-titl">热门文章</h2>
            <ul class="hot-list">
              <li class="hot-item" v-for="item in othObject.bulletinHot">
                 <p class="bulletin-hot-text">{{item.title}}</p>
                 <p class="bulletin-item-sundry">
                  <i>{{item.date}}</i>
                  <i class="iconfont icon-yanjing"></i>{{item.num}}
                  <i class="iconfont icon-lishijilu"></i>历史记录
                 </p>
              </li>
            </ul>
     </div>
  </div>
  <Slidebar></Slidebar>
</div>
</template>

<script>
import Slidebar from '../components/Slidebar'
import falseData from '../../data.json'
export default {
  name:'NewsDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      othObject:falseData,
      curObject:''
    }
  },
  created(){
    var idx = this.$route.params.id;
    this.curObject = falseData.newsDetail[idx];
  },
 components: {
    Slidebar
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-left{
  width:800px;
  float: left;
}
.news-dpath{
  font-size:12px;
  padding:20px 0;
}
.news-dtitle{
  font-size:26px;
}
.bulletin-item-sundry{
  font-size: 14px;
  color:#aeb2b5;
  line-height:40px;
}
.bulletin-item-div{
  margin-top:20px;
}
.bulletin-item-sundry i{
  padding:0 5px;
}
.bulletin-rigt{
    width:360px;
    float: right;
}
.hot-list{
  border-top:1px solid #ccc;
}
.hot-item{
 padding-top:10px;
}
.bulletin-hot-text{
  font-size: 14px;
  color:#666;
  line-height:24px;
}
.bulletin-more{
  text-align: center;
  font-size: 24px;
  color:#000;
  line-height:60px;
  border: 1px solid #ccc;
  margin-top:30px;
}
.news-dtext{
  font-size:14px;
  line-height:28px;
}
.bulletin-titl{
     font-size: 18px;
    color: #333;
    line-height: 56px; 
}
.news-dpath1{
  display: inline;
      color: #07bbee;
}
</style>
