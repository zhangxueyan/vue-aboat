<template>
  <div class="nav-full">
      <div class="nav-container clearfix">
        <router-link  v-for="(item,index) in $t('navMessages.items')" :to="item.path" :key="item.id">
           <span class="nav-item" @click="goPage(item,index)" :class="index==num?'active':''">{{item.name}}</span>
        </router-link>
        <p class="lan-btn" @click="changeLan">{{$t("message.lan")}}</p>
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
      ],
      num:0
    }
  },
  methods:{
    goPage:function(item,index){
      this.num = index
    },
    changeLan(){
      let locale = this.$i18n.locale
      locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-full{
  background:#000;
}
.nav-container{
  width:1000px;
  margin:0 auto;
}
.nav-item{
  float: left;
  line-height: 60px;
  color:#fff;
  font-size:16px;
  text-align: center;
  padding:0 15px;
}
.nav-item.active{
    background: #3e444a;
}
.lan-btn{
 line-height: 60px;
  color:#fff;
  font-size:16px;
  text-align: center;
  padding:0 15px;
  float:right;
  cursor:pointer;
}
</style>
