<template>
<div class="question-bank">
  <!-- nav ending/ -->
  <section>
   <img src="static/images/pc_18.png">
  </section>
  <!-- banner ending -->
  <section class="all-qbanks">
   <div class="container">
    <h2 class="que-title">全部题库</h2>
    <ul class="all-qbanks clearfix">
      <li class="all-qbank" v-for="allQbank in allQbanks">
        <h2>{{allQbank.title}}</h2>
        <p>{{allQbank.text}}</p>
        <div class="all-qbmask">
           <a href="javascript:;" v-for="mbtn in allQbank.mbtns">{{mbtn}}</a>
        </div>
      </li>
    </ul>
   </div>
  </section>
  <Slidebar></Slidebar>
</div>
</template>

<script>
import Slidebar from '../components/Slidebar'
export default {
  name:'QuestionBank',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      allQbanks:[
        {
          title:'历年真题',
          text:'三科历年真题及解析',
          mbtns:[
          '18年技术务实真题解析',
          '18年综合能力真题解析',
          '18年案例分析真题解析'
          ],
          showDetail:false
        },
        {
          title:'消防安全技术实务题库',
          text:'教研专题[技术实务]',
          mbtns:[
          '18年技术务实真题解析',
          '18年综合能力真题解析',
          '18年案例分析真题解析'
          ],
          showDetail:false
        },
        {
          title:'消防安全技术综合能力题库',
          text:'教研专题[综合能力]',
          mbtns:[
          '18年技术务实真题解析',
          '18年综合能力真题解析',
          '18年案例分析真题解析'
          ],
          showDetail:false
        },
        {
          title:'消防安全案例分体题库',
          text:'教研专题[案例分析]',
          mbtns:[
          '18年技术务实真题解析',
          '18年综合能力真题解析',
          '18年案例分析真题解析'
          ],
          showDetail:false
        }
      ]
    }
  },
 components: {
    Slidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.que-title{
    height: 110px;
    line-height: 110px;
    font-size: 24px;
    color: #333;
    text-align: center;
}
.all-qbank{
  width:300px;
  height:200px;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  padding-top:60px;
  position: relative;
  color:#333;
  float: left;
  cursor:pointer;
}
.all-qbank:hover{
  background:#35b4ec;
  color:#fff;
}
.all-qbank:hover h2{
   color:#fff;
}
.all-qbank:hover p{
   color:#fff;
}
.all-qbank:hover .all-qbmask{
  opacity:1;
}
.all-qbank h2{
  color:#666;
  font-size:18px;
  text-align: center;
  line-height: 40px;
  font-weight:700;
}
.all-qbank p{
    height: 36px;
    font-size: 12px;
    color: #999;
    line-height: 18px;
    text-align: center;
    overflow: hidden;
}
.all-qbmask{
  width:400px;
  height: 200px;
  border:1px solid #ccc;
  position: absolute;
  left:40px;
  top:150px;
  opacity:0;
  box-shadow: 0 0 12px 0 rgba(204, 204, 204, .75);
  border-radius: 2px;
  background-color: #fff;
  transition: all 0.5s;
}
.all-qbmask a{
  width:150px;
  border:1px solid #ccc;
  border-radius:20px;
  line-height: 30px;
  text-align: center;
  float: left;
  margin:10px 0 0 30px;
  color:#333;
}
</style>
