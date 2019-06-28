<template>
<div class="qa-community">
  <div class="container clearfix">
    <div class="qa-main">
       <div class="qa-filter1 clearfix">
          <p class="fl">全部分类</p>
          <a href="javascript:;" class="fr">我要提问</a>
       </div>
       <div class="qa-filter2">
         <a href="javascript:;">全部</a>
         <a href="javascript:;">消防工程师</a>
       </div>
       <div class="qa-filter3 clearfix">
         <div class="qa-cates fl clearfix">
           <a href="javascript:;">全部</a>
           <a href="javascript:;">热门</a>
           <a href="javascript:;">精华</a>
         </div>
         <div class="qa-search fr">
           <input type="text" placeholder="请输入搜索关键词">
           <i class="iconfont icon-sousuo"></i>
         </div>
       </div>
       <ul class="qa-floors">
         <li class="qa-floor clearfix">
            <div class="qa-personal fl">
               <div class="qa-portrait">
                 <img src="static/images/pc_10.jpg" alt="">
               </div>
               <p class="qa-uname">163*****289</p>
            </div>
            <div class="qa-text fl">
               <p class="qa-p1">气体灭火管道实验</p>
               <p class="qa-p2">请问：《建规》5.1.4条规定：大于100M高的民用建筑，楼板耐火极限不低于2小时。那么对....</p>
               <p class="qa-p3">还没有人回答这个问题...</p>
               <p class="qa-p4">提问时间:25分钟之前 标签:消防工程师</p>
            </div>
            <div class="qa-operation fr clearfix">
              <div class="qa-odiv">0<br>回答</div>
              <div class="qa-odiv">0<br>浏览</div>
            </div>
         </li>
         <li class="qa-floor clearfix">
            <div class="qa-personal fl">
               <div class="qa-portrait">
                 <img src="static/images/pc_11.png" alt="">
               </div>
               <p class="qa-uname">163*****289</p>
            </div>
            <div class="qa-text fl">
               <p class="qa-p1">气体灭火管道实验</p>
               <p class="qa-p2">请问：《建规》5.1.4条规定：大于100M高的民用建筑，楼板耐火极限不低于2小时。那么对....</p>
               <p class="qa-p3">还没有人回答这个问题...</p>
               <p class="qa-p4">提问时间:25分钟之前 标签:消防工程师</p>
            </div>
            <div class="qa-operation fr clearfix">
              <div class="qa-odiv">0<br>回答</div>
              <div class="qa-odiv">0<br>浏览</div>
            </div>
         </li>
       </ul>
    </div>
    <div class="qa-relevant">
       <h2>一周热门问题</h2>
       <ul class="qa-hots">
         <li class="qa-hot">各位是怎么学习的</li>
         <li class="qa-hot">如图关于计算高度的问题</li>
         <li class="qa-hot">请大家帮忙解一道题</li>
         <li class="qa-hot">泄压面积计算</li>
       </ul>
    </div>
    <div class="qa-relevant">
       <h2>相关课程</h2>
       <ul class="qa-rcourses">
         <li class="qa-rcourse clearfix" v-for="item in courseItems">
           <div class="qa-rpic fl">
             <img :src="item.imgUrl" alt="">
           </div>
           <div class="qa-rtext fl">{{item.title}}</div>
         </li>
       </ul>
    </div>
  </div>
  <Slidebar></Slidebar>
</div>
</template>

<script>
import falseData from '../../data.json'
import Slidebar from '../components/Slidebar'
export default {
  name:'QaCommunity',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      courseItems:falseData.courseList,
    }
  },
 components: {
    Slidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qa-main{
  width:840px;
  float: left;
}
.qa-filter1{
  border-bottom: 1px solid #f0f0f0;
  padding:15px 0;
}
.qa-filter1 p{
  font-size:14px;
  color:#333;
  line-height: 30px;
}
.qa-filter1 a{
  width:100px;
  background:#33b0ec;
  border-radius: 5px;
  font-size: 12px;
  color:#fff;
  text-align: center;
  line-height: 30px;
}
.qa-filter2{
  padding:20px 0;
  border-bottom: 1px solid #f0f0f0;
}
.qa-filter2 a{
  display: inline-block;
  font-size: 14px;
  color: #333;
  line-height: 30px;
}
.qa-cates a{
  width:50px;
  font-size: 14px;
  color: #333;
  margin-left:10px;
  line-height: 26px;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  float: left;
}
.qa-search {
  width:200px;
  height: 26px;
  border-radius: 13px;
  border:1px solid #ccc;
  margin-top:2px;
}
.qa-search input{
 display:inline-block;
 width:160px;
 background:none;
 outline:none;
 border:none;
 height:26px;
 border-radius: 13px;
 font-size:12px;
 color:#666;
 padding-left:10px;
}
.qa-filter3{
  margin-top: 30px;
}
.qa-floor{
  margin-top:30px;
  padding-bottom:30px;
  border-bottom: 1px solid #f0f0f0;
}
.qa-personal{
  width:120px;
}
.qa-portrait{
  display:block;
  width:40px;
  height:40px;
  margin:0 auto;
  border-radius:50%;
  background:#ccc;
  overflow: hidden;
}
.qa-uname{
 font-size:12px;
 color:#666;
 text-align: center;
 margin-top:20px;
}
.qa-text{
  width:570px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.qa-text p{
  color: #333;
  font-size: 14px;
  line-height: 30px;
}
.qa-operation{
  margin-top:30px;
}
.qa-odiv{
  width:60px;
  float:left;
  text-align: center;
  font-size:12px;
}
.qa-relevant{
  width:280px;
  float: right;
}
.qa-relevant h2{
    font-size: 18px;
    color: #14191e;
    line-height: 60px;
    border-bottom: 1px solid #f0f0f0;
}
.qa-hot{
    font-size: 14px;
    color: #333;
    line-height:40px; 
}
.qa-rcourse{
  margin-top:30px;
}
.qa-rpic{
   width:128px;
   height: 70px;
   background: #ccc;
}
.qa-rtext{
  width:140px;
      font-size: 14px;
    color: #333;
    line-height:40px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left:10px;
}
</style>