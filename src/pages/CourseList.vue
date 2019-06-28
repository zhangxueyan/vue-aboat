<template>
<div class="courseList">
  <div class="container">
    <Filtertabs @get-sel-data="getSelData" @set-time="setTime"></Filtertabs>
    <Filterview :course-items = "courseItems" :view-time="viewTime"></Filterview>
  </div>
</div>
</template>

<script>
import router from '../router'
import falseData from '../../data.json'
import Filtertabs from '../components/Filtertabs'
import Filterview from '../components/Filterview'
import axios from 'axios'
export default {
  name:'CourseList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search: '',
      
      viewTime: {
        time: true,
        msg: '数据拼命加载中...'
      },
      // 可变化的视图数据
      courseItems:falseData.courseList,
      // 固定的视图数据
      viewData:falseData.courseList
    }
  },
  mounted() {
    this.setTime(300, 0, false)
  },
  computed: {
  },
  components:{
    Filtertabs,
    Filterview
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
    },

    // 以下是new function
    getSelData:function(data){
      this.courseItems = this.viewData.filter(function(item){
          if(data[0].text=="全部"){
              return item['lab0']!='';
          }else{
              return data[0].text==item['lab0'] 
          }
      })
      this.courseItems = this.courseItems.filter(function(item){
          if(data[1].text=="全部"){
              return item['lab1']!='';
          }else{
              return data[1].text==item['lab1'] 
          }
      })
      // 筛选之后显示保证间隔
      this.courseItems.forEach(function(item,index){
         if(index % 4!= 0){
          item.isFirst=false
         }else{
          item.isFirst=true
         }
      })
    },
    // 模拟延时显示数据视图
    setTime(startTime, endTime, bool) {
      setTimeout(() => {
        this.viewTime.time = bool
          setTimeout(() => {
            this.viewTime.time = false
        }, endTime)
      }, startTime)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
