<template>
<div class="question-bank">
  <!-- nav ending/ -->
  <section>
   <img src="static/images/pc_05.jpg">
  </section>
  <!-- banner ending -->
  <section class="all-qbanks">
   <div class="container">
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
  name:'OpenClass',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      allQbanks:[
        {
          title:'技术务实第二篇测评',
          text:'大家加油哦',
          mbtns:['技术务实','技术务实','技术务实'],
          showDetail:false
        },
        {
          title:'技术务实第二篇测评',
          text:'大家加油哦',
          mbtns:['技术务实','技术务实','技术务实'],
          showDetail:false
        },
        {
          title:'技术务实第二篇测评',
          text:'大家加油哦',
          mbtns:['技术务实','技术务实','技术务实'],
          showDetail:false
        },
        {
          title:'技术务实第二篇测评',
          text:'大家加油哦',
          mbtns:['技术务实','技术务实','技术务实'],
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
.all-qbanks{
  margin-top:30px;
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
.all-qbank:hover .all-qbmask{
  opacity:1;
}
.all-qbank h2{
  font-size:22px;
  text-align: center;
  line-height: 40px;
}
.all-qbank p{
  font-size:18px;
  text-align: center;
  line-height: 40px;
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
  width:100px;
  border:1px solid #ccc;
  border-radius:20px;
  line-height: 30px;
  text-align: center;
  float: left;
  margin:10px 0 0 20px;
  color:#333;
}
</style>
