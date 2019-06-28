<template>
<div class="courseDetail">
   <div class="container">
      <div class="course-crumbs">
      	 <a href="javascript:;">全部课程</a>\
      	 <a href="javascript:;">注册消防工程师</a>\
      	 <a href="javascript:;">{{curObject.smallClass}}</a>\
      	 <span class="crumbs-last">{{curObject.title}}</span>
      </div>
      <div class="course-box clearfix">
      	 <div class="course-pic fl">
           <img :src="curObject.imgUrl"> 
         </div>
      	 <div class="course-brief fl">
      	     <div class="course-titl">
      	    	<h2>{{curObject.title}}({{curObject.teacher}})</h2>
      	    	<div class="course-codebox">
      	    	 <i class="iconfont icon-erweima1"></i>
      	    	 <div class="course-codeimg">
      	    	   <img src="static/images/pc_03.jpg">
      	    	 </div>
      	    	</div>
      	     </div>
      	 	 <p class="course-p1">教学模式：{{curObject.pattern}} 学习人数：{{curObject.number}} 课程有效期:{{curObject.expiry}}</p>
      	 	 <p class="course-p2">￥{{curObject.originalPrice}}<span>￥{{curObject.currentPrice}}</span></p>
      	 	 <a href="javascript:;" class="pur-btn">购买课程</a>
      	 </div>
      	 <div class="course-handle fr">
      	 	<i class="iconfont icon-shoucang1" @click="getActive" :class='{active:curObject.isActive}'></i>收藏 {{curObject.count}}
      	 	<i class="iconfont icon-13" @></i>分享
      	 </div>
      </div>
      <!-- 底部课程信息 -->
      <div class="course-div clearfix">
         <div class="course-left">
            <div class="course-tabs clearfix">
              <a href="javascript:;" v-for="(courseTab,index) in curObject.courseTabs" :class='{active:courseTab.isActive}' @click="slideTo(index,courseTab)" >{{courseTab.name}}</a>
            </div>
            <div class="course-swiper">
              <swiper :options="swiperOption3" ref="mySwiper3">
                <swiper-slide>
                  <div class="courseTab1">
                     <p class="courseTab1-p1">{{curObject.tabContent1.courseBrief}}</p>
                     <p class="courseTab1-p2">{{curObject.tabContent1.teacherBrief}}</p>
                     <div class="courseTab1-div">
                       <h2>课程简章：</h2>
                       <p v-for="item in curObject.tabContent1.courseAdvs">{{item}}</p>
                     </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="courseTab2">
                    <ul>
                      <li class="courseTab2-item" v-for="childItem in curObject.tabContent2" @click="showChild(childItem)">
                        <h2>{{childItem.title}}</h2>
                        <div class="courseTab2-childItems" v-if="childItem.isShowchild">
                          <div class="courseTab2-childItem" v-for="child in childItem.subts">
                            {{child}}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="courseTab3">暂无直播节目</div>
                </swiper-slide>
                <swiper-slide>
                  <ul class="courseTab4">
                    <li v-for="item in curObject.tabContent4.courseInfo" :key="item.id">
                      {{item.title}}
                    </li>
                  </ul>
                <Pagination @transition-event = "paginationEvent"></Pagination>
                </swiper-slide>
              </swiper>
            </div>
         </div>
         <div class="course-right">
            <h2>名师</h2>
            <ul class="course-teachers">
              <li class="course-teacher">
                <div class="course-tbox clearfix">
                  <div class="course-teapic fl"></div>
                  <p class="course-teaname fl">陆老师</p>
                </div>
                <p class="course-teatext">女，北京政法职业学院安防系消防工程专业教师，其颇有研究的消防安全设施占考试很大比重，考点讲解十分细致，综合解题模式的引导循序渐进，条理清晰，注重学员的直播提问，课堂互动效果极佳，主讲综合能力。</p>
              </li>
              <li class="course-teacher">
                <div class="course-tbox clearfix">
                  <div class="course-teapic fl"></div>
                  <p class="course-teaname fl">陆老师</p>
                </div>
                <p class="course-teatext">女，北京政法职业学院安防系消防工程专业教师，其颇有研究的消防安全设施占考试很大比重，考点讲解十分细致，综合解题模式的引导循序渐进，条理清晰，注重学员的直播提问，课堂互动效果极佳，主讲综合能力。</p>
              </li>
            </ul>
         </div>
      </div>
    </div>
</div>
</template>

<script>
import router from '../router'
import falseData from '../../data.json'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Pagination from '../components/Pagination'
export default {
  name:'CourseDetail',
  data () {
    return {
      curObject:'',
      swiperOption3: {
        initialSlide :0,
        effect : 'fade',
        fade: {
          crossFade: true,
        }
      }
    }
  },
  components:{
    swiper,
    swiperSlide,
    Pagination
  },
  computed:{
      swiper() {
        return this.$refs.mySwiper3.swiper
      }
    },
  created(){
    console.log(this)
    var idx = this.$route.params.id;
    this.curObject = falseData.courseDetail[idx];
  },
  methods:{
     getActive:function(){
       this.curObject.isActive = !this.curObject.isActive
       if(this.curObject.isActive==true){
       	this.curObject.count++
       }else{
       	this.curObject.count--
       }
     },
     slideTo:function(idx,curItem){
       this.curObject.courseTabs.forEach(function(item){
         item.isActive = false
       })
       this.swiper.slideTo(idx, 1000, false)
       curItem.isActive = true
     },
     showChild:function(curItem){
      curItem.isShowchild=!curItem.isShowchild
     },
     paginationEvent:function(pagenumber){
      var _this = this.curObject.tabContent4;
      var n = pagenumber;
      _this.courseInfo = _this.courseMore.slice((n-1)*5,n*5)
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.course-crumbs a{
	display:inline-block;
	font-size:12px;
	color:#333;
	line-height: 60px;
}
.crumbs-last{
  display:inline-block;
	color:#a1a1a1;
  font-size:12px;
  line-height: 60px;
}
.course-pic{
	width:370px;
	background:#ccc;
}
.pur-btn{
	width:170px;
	background:#35b4ec;
	border-radius:5px;
	font-size:18px;
	color:#fff;
	letter-spacing:3px;
	line-height: 50px;
	text-align: center;
	margin-top:10px;
}
.course-brief{
	margin-left:30px;
}
.course-titl{
	font-size:0;
}
.course-titl h2{
	color:#333;
	font-size:26px;
	display:inline-block;
}
.course-p1{
	color:#909090;
	font-size: 14px;
	margin-top:10px;
}
.course-p2{
	font-size:22px;
	color:#e20400;
	margin-top:10px;
}
.course-p2 span{
	color:#909090;
	font-size: 14px;
	text-decoration:line-through;
}
.course-brief .icon-erweima1{
	font-size:28px;
	margin-left:20px;
	cursor:pointer;
}
.course-codebox{
	display: inline-block;
	position:relative;
}
.course-codebox:hover .course-codeimg{
   display:inline-block;
}
.course-codeimg{
	width:100px;
	height:100px;
	border:1px solid #ccc;
	position: absolute;
	left:0;
	top: 40px;
	padding:10px;
	display:none;
}
.course-handle .iconfont{
	font-size:22px;
	margin:0 2px;
	vertical-align: middle;
	cursor:pointer;
}
.icon-shoucang1.active{
  color:red;
}
.course-left{
  width:800px;
  float: left;
  border-top:1px solid #ccc;
  margin-top:30px;
}
.course-tabs a{
 display:block;
 width:130px;
 height: 60px;
 float: left;
 line-height: 60px;
 color:#333;
 text-align: center;
}
.course-tabs a.active{
  border-top:2px solid #33b0ec;
  color:#33b0ec;
}
.courseTab1-p1{
  font-size: 16px;
  color:#333;
  line-height: 30px;
}
.courseTab1-p2{
  font-size: 14px;
  color:#666;
  margin-top:30px;
  line-height: 24px;
}
.courseTab1-div h2{
  font-size: 20px; 
  margin-top:20px;
}
.courseTab1-div p{
  margin-top:20px;
}
.courseTab2-item{
  cursor:pointer;
  margin-top:20px;
}
.courseTab2-item h2{
  background: #f5f7fa;
  line-height: 40px;
  padding-left:10px;
}
.courseTab2-childItems{
  padding-left:20px;
}
.courseTab2-childItem{
  line-height: 40px;
}
.course-right{
  width:246px;
  float:right;
  border-top:1px solid #ccc;
  margin-top:30px;
  padding-top:30px;
}
.course-teacher{
  margin-top:30px;
}
.course-teapic{
  width:60px;
  height: 60px;
  border-radius:50%;
  background:#ccc;
}
.course-teaname{
  font-size:16px;
  color:333;
  line-height: 60px;
  margin-left:20px;
}
.course-teatext{
  color:333;
  text-indent:2em;
  line-height:24px;
  margin-top:10px;
  background-color: #f5f7f9;
  font-size: 12px;
  color: #4d555d;
  padding:10px;
  border-radius: 10px;
}
.courseTab4{
  line-height:50px;
}
</style>
