<template>
<div class="home">
  <!-- nav ending/ -->
  <section class="banner">
      <swiper :options="swiperOption1" ref="mySwiper1">
        <swiper-slide v-for="banItem in banItems" :key="banItem.id">
        <img :src="banItem.imgUrl">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination swiper-pagination1" slot="pagination"></div>
  </section>
  <!-- banner ending -->
  <section class="s1">
     <div class="container">
      <h2 class="s-titl"><span>推荐课程</span></h2>
      <ul class="s1-items clearfix">
        <li class="s1-item" v-for="(courseItem,index) in curObject.courseList" v-if = "index < 4">
         <router-link :to="{name:'CourseDetail',params:{id:courseItem.id}}">
           <div class="s1-pic">
             <img :src="courseItem.imgUrl" alt="">
             <div class="s1-online">
              <span class="iconfont icon-gerenyonghutouxiang2 fl"></span>
              <span class="s1-num fr">{{courseItem.num}}</span>
             </div>
            </div>
            <div class="s1-text clearfix">
              <p class="s1-cname fl">{{courseItem.title}}</p>
              <template v-if="courseItem.price=='免费'">
                <p class="s1-cprice fr">{{courseItem.price}}</p>
              </template>
              <template v-else>
                <p class="s1-cprice fr">￥{{courseItem.price}}</p>
              </template>
            </div>
            <div class="hrline"></div>
         </router-link>
        </li>
      </ul>
      <router-link class="s-btn" :to="{name:'CourseList'}">查看更多</router-link> 
     </div>
  </section>
  <!-- s1 ending -->
  <section class="s2">
    <div class="container">
      <h2 class="s-titl"><span>名师专区</span></h2>
      <ul class="s2-items clearfix">
        <li class="s2-item" v-for="(teacherItem,index) in curObject.teacherList" v-if="index < 5">
         <router-link :to="{name:'TeacherDetail',params:{id:teacherItem.id}}">
          <img :src="teacherItem.imgUrl">
          <div class="s2-botText">
              <p class="tname">{{teacherItem.name}}</p>
              <div clearfix>
                <div class="tstar fl">
                  <Score :size="24" :score="teacherItem.score"></Score>
                </div>
                <p class="tscore fr">{{teacherItem.score}}分</p>
              </div>
          </div>
         </router-link>
        </li>
      </ul>
      <router-link class="s-btn" :to="{name:'TeacherList'}">查看更多</router-link> 
    </div>
  </section>
  <!-- s2 ending -->
  <section class="s3">
    <div class="container s3-ct">
        <div class="s-tbox clearfix">
          <h2 class="s3-titl fl">新闻资讯</h2>
          <router-link class="s-more fr" :to="{name:'NewsBulletin'}">查看更多</router-link> 
        </div>
        <div class="s3-div clearfix">
           <div class="s3-swiper fl">
              <swiper :options="swiperOption2" ref="mySwiper2">
                <swiper-slide v-for="swiperItem in swiperItems" :key="swiperItem.id">
                   <img :src="swiperItem.imgUrl">
                   <p>{{swiperItem.text}}</p>
                </swiper-slide>
              </swiper>
              <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
           </div>
           <ul class="s3-news fr">
            <li class="s3-new clearfix" v-for="(newsItem,index) in curObject.bulletinList" v-if="index<4">
              <router-link :to="{name:'NewsDetail',params:{id:newsItem.id}}">
                <div class="s3-date fl">
                  <p class="s3-date1">{{newsItem.date}}</p>
                  <hr class="s3-hr">
                  <p class="s3-date2">{{newsItem.year}}</p>
                </div>
                <div class="s3-text fr">
                  <h3>{{newsItem.title}}</h3>
                  <p>{{newsItem.text}}</p>
                </div>
              </router-link>
            </li>
           </ul>
        </div>
    </div>
  </section>
  <!-- s3 ending -->
  <Slidebar></Slidebar>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Score from '../components/Score'
import Slidebar from '../components/Slidebar'
import falseData from '../../data.json'

import { apiAddress } from '@/request/api';// 导入我们的api接口

export default {
  name:'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      curObject:'',
      banItems:[
        {imgUrl:require('../assets/images/ban01.png')},
        {imgUrl:require('../assets/images/ban02.png')},
        {imgUrl:require('../assets/images/ban03.png')}
        ],
      swiperOption1: {
        // autoplay: 3000,
        speed: 1000,
        pagination : '.swiper-pagination1',
        paginationClickable :true
      },
      swiperOption2: {
        // autoplay: 3000,
        speed: 1000,
        pagination : '.swiper-pagination2',
        paginationClickable :true
      },
      swiperItems:[
        {
          imgUrl:"static/images/pc_15.jpg",
          text:'政策解读 | 消防执法改革，市场是否不...'
        },
        {
          imgUrl:"static/images/pc_16.png",
          text:'成绩查询后，这些事情你需要了解一下！'
        },
        {
          imgUrl:"static/images/pc_17.jpg",
          text:'全国齐出击，高层建筑火灾严控成社会热点'
        }
      ]
    }
  },
 created(){
    apiAddress().then(res => {
      console.log(res,"我是vue请求的数据");
      this.curObject = res
    })
 },

 components: {
    swiper,
    swiperSlide,
    Score,
    Slidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
