<template>
<div class="famous-teacher">
  <div class="container">
    <div class="famous-filter clearfix">
      <p class="famous-all">全部老师</p>
      <div class="famous-cates clearfix">
        <a href="javascript:;">综合</a>
        <a href="javascript:;">人气</a>
        <a href="javascript:;">好评</a>
      </div>
    </div>
    <ul class="famous-titems clearfix">
      <li class="famous-titem" v-for="item in teachersList">
        <router-link :to="{name:'TeacherDetail',params:{id:item.id}}">
          <div class="famous-tdiv">
            <div class="famous-tpic"></div>
            <p class="famous-tp1">{{item.name}}</p>
            <div class="famous-tp2 clearfix">
              <span class="fl">开课:{{item.courseNum}}</span>
              <span class="fr">招生:{{item.studentsNum}}</span>
            </div>
          </div>
          <div class="famous-tbrief">{{item.personalBrief}}</div>
        </router-link>
      </li>
    </ul>
  </div>
  <Slidebar></Slidebar>
</div>
</template>

<script>
import Slidebar from '../components/Slidebar'
import falseData from '../../data.json'
export default {
  name:'TeacherList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      teachersList:falseData.teacherList
    }
  },
 components: {
    Slidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.famous-filter{
  margin-top:30px;
}
.famous-all{
  float:left;
  line-height: 30px;
}
.famous-cates{
  float: left;
  margin-left:30px;
}
.famous-cates a{
    width:50px;
    font-size: 12px;
    color: #999;
    line-height: 26px;
    text-align: center;
    border: 1px solid #d9dde1;
    border-radius:5px;
    float: left;
    margin-left:10px;
}
.famous-titem{
  width:270px;
  float: left;
  border:1px solid #ccc;
  margin:30px 0 0 26px;
}
.famous-tdiv{
  background:#f7f9fc;
  padding:20px 0 10px;
  border-bottom:1px solid #ccc;
}
.famous-tpic{
  width:110px;
  height: 110px;
  border: 1px solid #ccc;
  border-radius:50%;
  margin:0 auto;
}
.famous-tp1{
  font-size:14px;
  text-align: center;
  line-height: 40px;
}
.famous-tp2 span{
  font-size:12px;
  padding:0 20px;
}
.famous-tbrief{
  font-size:12px;
  line-height: 24px;
  padding:10px 20px;
  text-indent: 2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
