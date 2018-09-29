<template>
  <div class="nav-full">
      <div class="container clearfix">
        <router-link  v-for="navItem in navItems" :to="navItem.path" :key="navItem.id">
           <p class="nav-item" @click="goPage(navItem)" :class="{'active':navItem.isActive}" >{{navItem.name}}</p>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navItems:[
        {name:'首页',isActive:true,path:'/'},
        {name:'发现课程',isActive:false,path:'/CourseList'},
        {name:'实战题库',isActive:false,path:'/QuestionBank'},
        {name:'问答社区',isActive:false,path:'/QaCommunity'},
        {name:'公开课',isActive:false,path:'/OpenClass'},
        {name:'名师专栏',isActive:false,path:'/TeacherList'},
        {name:'新闻公告',isActive:false,path:'/NewsBulletin'}
      ]
    }
  },
  methods:{
    goPage:function(curItem){
      this.navItems.forEach(function(item){
        item.isActive = false
      })
      curItem.isActive = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-full{
  background:#000;
}
.nav-item{
  float: left;
  line-height: 60px;
  color:#fff;
  font-size:16px;
  text-align: center;
  padding:0 15px;
}
.nav-item:hover{
  background:#31363b;
}
.nav-item.active{
  background:#31363b;
}
</style>
