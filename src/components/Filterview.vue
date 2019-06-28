<template>
  <div class="filter-view">
    <!-- filter condition ending -->
    <ul class="courseItems clearfix" v-if="!viewTime.time">
      <template v-if="courseItems.length>0">
        <li class="courseItem" v-for="(courseItem,index) in courseItems" :class="{'no-ml':courseItem.isFirst}">
          <router-link :to="{ name: 'CourseDetail',params: { id:courseItem.id}}">
          <div class="courseItem-pic">
          <img :src="courseItem.imgUrl" alt="">
          </div>
          <div class="courseItem-text">
          <p class="courseItem-title">{{courseItem.title}}</p>
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
      </template>
      <template v-else >
        <div class="view-no">暂无数据...</div>
      </template>
    </ul>
    <div v-else class="view-no">{{viewTime.msg}}</div>
  </div>
</template>

<script>
export default {
  props: {
    courseItems: {
     type: Array,
     default: () => []
    },
    viewTime: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-view{
  min-height:500px;
}
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
