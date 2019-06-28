<template>
<div class="open-class">
  <!-- nav ending/ -->
  <section>
   <img src="static/images/pc_19.png">
  </section>
  <!-- banner ending -->
  <section class="s1">
     <div class="container">
      <h2 class="open-titl">大家都在看</h2>
      <ul class="s1-items clearfix">
        <li class="s1-item" v-for="(courseItem,index) in curObject.courseList" v-if = "index < 4">
         <router-link :to="{name:'CourseDetail',params:{id:courseItem.id}}">
           <div class="s1-pic">
             <img :src="courseItem.imgUrl" alt="">
            </div>
            <div class="s1-text">
              <p class="s1-cname">{{courseItem.title}}</p>
              <p class="open-cname">主讲:{{courseItem.teacher}}</p>
            </div>
            <div class="hrline"></div>
         </router-link>
        </li>
      </ul>
     </div>
  </section>
  <!-- s1 ending -->
  <Slidebar></Slidebar>
</div>
</template>

<script>
import falseData from '../../data.json'
import Slidebar from '../components/Slidebar'
export default {
  name:'OpenClass',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      curObject:falseData,
    }
  },
 components: {
    Slidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.open-titl{
    font-size: 28px;
    color: #000;
    text-align: center;
    margin-top:50px;
}
.open-cname{
  font-size:14px;
  color:#666;
  padding-bottom:20px;
}
</style>
