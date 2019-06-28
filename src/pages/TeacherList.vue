<template>
<div class="famous-teacher">
  <div class="container">
    <div class="famous-filter clearfix">
      <p class="famous-all">全部老师</p>
      <div class="famous-cates clearfix">
        <a href="javascript:;"  class="famous-cate" v-for="(item,index) in teaLabs" @click="tbClick(item,index)" :class="num==index?'active':''">{{item}}</a>
      </div>
    </div>
    <ul class="famous-titems clearfix">
      <li class="famous-titem" v-for="item in teacherList" :class="{'no-ml':item.isFirst}">
        <router-link :to="{name:'TeacherDetail',params:{id:item.id}}">
          <div class="famous-tdiv">
            <div class="famous-tpic">
              <img :src="item.imgUrl" alt="">
            </div>
            <p class="famous-tp1">{{item.name}} {{item.lab}}</p>
            <div class="famous-tp2 clearfix">
              <span class="fl">开课:{{item.courseNum}}</span>
              <span class="fr">招生:{{item.studentsNum}}</span>
            </div>
          </div>
          <div class="famous-tbrief">
            <p class="famous-btext">{{item.personalBrief}}</p>
            <div class="famous-tbox">
              <a href="javascript:;" class="famous-tbtn">Ta的主页</a>
            </div>
          </div>
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
      // 固定数据
      teacherData:falseData.teacherList,
      // 根据筛选变动的数据
      teacherList:falseData.teacherList,
      teaLabs:["综合","人气","好评"],
      num:0
    }
  },
 components: {
    Slidebar
  },
  methods:{
    tbClick:function(item,index){
       this.num = index
       // console.log(item,index)
       this.teacherList = this.teacherData.filter(function(k){
          if(item=="综合"){
            return item!=""
          }else{
            return item == k.lab
          }
       })
       this.teacherList.forEach(function(item,index){
          if(index%4==0){
            item.isFirst = true
          }else{
            item.isFirst = false
          }
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.famous-titems{
  min-height: 670px;
}
.famous-filter{
  margin-top:30px;
}
.famous-all{
  font-size: 18px;
    color: #333;
  float:left;
  line-height: 30px;
}
.famous-cates{
  float: left;
  margin-left:30px;
}
.famous-cate{
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
.famous-cate.active{
  color:#fff;
  border-color: #0af;
  background-color: #0af;
}
.famous-titem{
  width:270px;
  float: left;
  border: 1px solid #f0f0f0;
  margin:30px 0 0 40px;
  position: relative;
  transition:all 0.5s;
}
.famous-titem:hover .famous-tbox{
  display:block;
}
.famous-titem:hover{
  box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}
.famous-tdiv{
  background-color: #f8fafc;
  border-bottom: 1px solid #f0f0f0;
  padding:20px 0 10px;
}
.famous-tpic{
  width:110px;
  height: 110px;
  border: 1px solid #ccc;
  border-radius:50%;
  margin:0 auto;
  overflow: hidden;
}
.famous-tp1{
  font-size:14px;
  text-align: center;
  line-height: 40px;
  color:#333;
}
.famous-tp2 span{
  font-size:12px;
  padding:0 20px;
  color:#999;
}
.famous-tbrief{
  padding: 10px 20px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
}
.famous-btext{
  font-size:12px;
  color:#999;
  line-height: 30px;
  text-indent: 2em;
}
.famous-tbox{
  position: absolute;
  left:0;
  bottom:0;
  width: 100%;
  height: 100%;
  background: #fff;
  display:none;
}
.famous-tbtn{
  width:120px;
  line-height: 40px;
  margin: 30px auto 0;
  color: #fff;
  font-size:14px;
  background-color: #0af;
  border-radius: 5px;
  text-align:center;
}
</style>
