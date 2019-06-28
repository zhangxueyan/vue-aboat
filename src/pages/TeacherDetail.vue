<template>
  <div class="teacher-detail">
    <div class="teacher-top">
      <div class="teacher-brief clearfix">
        <div class="teacher-head">
          <img :src="teaObject.imgUrl" alt="">
        </div>
        <div class="teacher-text">
          <div class="teacher-div1">
            <span>{{teaObject.name}}</span>
            <div>
              <Score :size="24" :score="'4'"></Score>
            </div>
          </div>
          <div class="teacher-div2 clearfix">
            <p class="no-bl no-pl">课程:{{teaObject.courseNum}}</p>
            <p>评论:{{teaObject.comments}}</p>
            <p>学员:{{teaObject.studentsNum}}</p>
          </div>
          <p class="teacher-div3">{{teaObject.personalBrief}}</p>
        </div>
      </div>
    </div>
    <h2 class="teacher-titl">开设课程</h2>
    <!-- 某位老师开设课程 -->
    <ul class="s1-items clearfix">
        <li class="courseItem" v-for="(courseItem,index) in teaObject.openCourses" :class="{'no-ml':courseItem.isFirst}">
          <router-link :to="{ name: 'CourseDetail',params: { id:courseItem.id}}">
          <div class="courseItem-pic">
          <img :src="courseItem.imgUrl" alt="">
          </div>
          <div class="courseItem-text">
          <p class="courseItem-title">{{courseItem.title}}({{courseItem.teacher}})</p>
          <div class="courseItem-div">
            <template v-if="courseItem.price=='免费'">
              <span class="courseItem-price">{{courseItem.price}}</span>
            </template>
            <template v-else>
              <span class="courseItem-price">￥{{courseItem.price}}</span>
            </template>
            <span class="courseItem-discount">￥{{courseItem.discount}}</span>
            <p class="courseItem-brief">授课方式：{{courseItem.lab0}} {{courseItem.lab1}}</p>
            <div class="courseItem-num">
              <i class="iconfont icon-gerenyonghutouxiang2"></i>
              <span>{{courseItem.num}}</span>
            </div>
          </div>
         </div>
          </router-link>
        </li>
    </ul>

   <Slidebar></Slidebar>
 </div>
</template>

<script>
  import Slidebar from '../components/Slidebar'
  import falseData from '../../data.json'
  import Score from '../components/Score'
  export default {
    name:'TeacherDetail',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        teaObject:''
      }
    },
    created(){
      var idx = this.$route.params.id;
      this.teaObject = falseData.teacherDetail[idx];
    },
    components: {
      Slidebar,
      Score
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-pl{
  padding-left:0!important;
}
.teacher-top{
  background:#f3f8fd;
}
.teacher-brief{
  width:1000px;
  margin:0 auto;
  padding:30px 0;
}
.teacher-head{
  width: 150px;
  height: 150px;
  border-radius:50%;
  border:1px solid #ccc;
  background:#f2eeeb;
  float: left;
  overflow: hidden;
}
.teacher-text{
  width:820px;
  float: right;
}
.teacher-div1{
  margin-top: 15px;
}
.teacher-div1>div{
  display:inline-block;
}
.teacher-div1 span{
  font-size:22px;
}
.teacher-div2{
  margin-top: 15px;
}
.teacher-div2>p{
  float:left;
  padding:0 20px;
  border-left:1px solid #c2c6ca;
}
.teacher-div3{
  font-size: 12px;
  color: #666;
  margin-top: 15px;
  line-height: 22px;
}
.teacher-titl{
  font-size:24px;
  text-align:center;
  line-height: 50px;
  margin-top:10px;
}
.open-courses{
  width:980px;
  margin:0 auto;
}
.open-course{
  width:300px;
  float:left;
  margin:10px 0 0 26px;
}
.course-name{
  font-size:14px;
  text-align: center;
  line-height: 40px;
}
.course-pic{
  background:#ccc;
  height:165px;
}







/*开设课程部分css*/
.courseItem{
    float: left;
    margin: 30px 0 0 26px;
    width: 280px;
    padding: 0 0 20px;
    border-radius: 3px;
    box-shadow: 0 0 8px 0 rgba(221, 221, 221, .7);
}
.courseItem.active .courseItem-title{
  color:red;
}
.courseItem-pic{
   height: 150px;
   background:#ccc;
}
.courseItem-text{
  padding:0 15px;
}
.courseItem-div{
  position: relative;
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
.view-no{
  font-size:20px;
  text-align: center;
  line-height: 100px;
}
</style>
