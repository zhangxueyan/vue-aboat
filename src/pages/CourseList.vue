<template>
<div class="courseList">
  <div class="container">
  	<div class="course-filter1 clearfix" v-for="filter in filters">
  		<p class="course-way">{{filter.way}}</p>
  		<div class="course-cate" v-for="cate in filter.cates">
  			<span>{{cate}}</span>
  		</div>
  	</div>
  	<div class="course-filter2 clearfix">
  	   <div class="course-filter2-div1 clearfix fl">
	  	   	<a href="javascript:;" class="no-ml">最新</a>
	  	   	<a href="javascript:;">最热</a>
	  	   	<a href="javascript:;">综合</a>
  	   </div>
  	   <div class="course-filter2-div2 fr">
  	   	 <input type="text" placeholder="请输入搜索关键词" v-model='search' id="search">
  	   	 <i class="iconfont icon-sousuo" @click="getWord"></i>
  	   </div>
  	</div>

  	<!-- filter condition ending -->
  	<ul class="courseItems clearfix" v-if="courseItems.length>0">
  		<li class="courseItem" v-for="(courseItem,index) in courseItems">
      <router-link :to="{ name: 'CourseDetail',params: { id: courseItem.id}}">
        <div class="courseItem-pic"></div>
        <div class="courseItem-text">
          <p class="courseItem-title" v-html="setColor(courseItem.title,search)"></p>
          <div class="courseItem-div">
            <span class="courseItem-price">￥{{courseItem.price}}</span>
            <span class="courseItem-discount">￥{{courseItem.discount}}</span>
            <p class="courseItem-brief">{{courseItem.brief}}</p>
            <div class="courseItem-num">
              <i class="iconfont icon-gerenyonghutouxiang2"></i>
              <span>{{courseItem.num}}</span>
            </div>
          </div>
        </div>
      </router-link>
  		</li>
  	</ul>
  	<div v-else>暂无数据</div>
  </div>
</div>
</template>

<script>
import router from '../router'
import falseData from '../../data.json'
import axios from 'axios'
export default {
  name:'CourseList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search: '',
      filters:[
      {way:'学科分类:',cates:['全部','注册消防工程师']},
      {way:'授课方式:',cates:['全部','直播','录播','其他']}
      ],
      courseItems:falseData.courseList
    }
  },
  created(){
    axios.get('https://zhangxueyan.github.io/private/aboat/data.json')
       .then((response)=>{
        // console.log(response)
        })
       .catch((error)=>{
        console.log(error);
    })
  },
  computed: {
  },
  methods:{
    searchData2:function(){
      var key = this.search;
      this.courseItems = this.courseItems.filter(function(curItem){
        return Object.keys(curItem).some(function(curKey){
          return String(curItem[curKey]).toLowerCase().indexOf(key.toLowerCase())>-1
        })
      })
    },
    setColor:function(item,val){
      var patt = new RegExp(val,'gi');
      return item.replace(patt,"<span style='color:#ff0000'>"+val+"</span>")
    },
    getWord:function(){
      var key = this.search;
      this.courseItems = this.courseItems.filter(function(curItem){
        return Object.keys(curItem).some(function(curKey){
          return String(curItem[curKey]).toLowerCase().indexOf(key.toLowerCase())>-1
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.course-filter1{
  border-bottom:1px dashed #d5d9dd;
}
.course-way{
  width:90px;
  text-align:right;
  font-size:14px;
  line-height: 60px;
  float: left;
}
.course-cate{
	float:left;
}
.course-cate{
	font-size:0;
	text-align: center;
}
.course-cate span{
 display: inline-block;
   font-size:14px;
  line-height: 60px;
  padding:0 20px;
  cursor:pointer;
}
.course-cate span:hover{ 
	color:#35b4ec;
}
.course-filter2{
	margin-top:30px;
}
.course-filter2 a{
	display:block;
	width:50px;
	background:#35b4ec;
	border-radius:5px;
	float: left;
	font-size:14px;
	color:#fff;
	line-height: 30px;
	text-align: center;
	margin-left:15px;
}
.course-filter2-div2{
	width:200px;
	height: 26px;
	border-radius: 13px;
	border:1px solid #ccc;
	margin-top:2px;
}
.course-filter2-div2 input{
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
.course-filter2-div2 i{
	width:20px;
	cursor:pointer;
}
.courseItem{
    float: left;
    margin: 30px 0 0 0;
    width: 25%;
    padding: 0 10px;
}
.courseItem.active .courseItem-title{
  color:red;
}
.courseItem-pic{
   height: 150px;
   background:#ccc;
}
.courseItem-div{
	position: relative;
	margin-top:20px;
}
.courseItem-num{
	position: absolute;
	right:0;
	top:5px;
}
.courseItem-price{
	color:#f74644;
	font-size:14px;
}
.courseItem-discount{
	color:#8b8b8b;
	font-size:12px;
	text-decoration:line-through;
}
.courseItem-brief{
	font-size:14px;
	color:#8b8b8b;
	margin-top:10px;
}
.courseItem-title{
	color:#333;
	font-size:14px;
	line-height: 40px;
}
.courseItem-num .icon-gerenyonghutouxiang2{
	color:#8b8b8b;
	font-size:14px;
}
.courseItem-num span{
	color:#8b8b8b;
	font-size:14px;
}
.courseItems{
	margin-top:30px;
}
</style>
