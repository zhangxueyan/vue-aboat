<template>
  <div class="filter-tabs">
    <div class="course-filter1 clearfix" v-for="(item,index) in filterList">
      <p class="course-way">{{item.title}}</p>
      <div class="course-content clearfix">
        <span class="course-cate" v-for="(chilItem,childIndex) in item.labs" :class="{'active':chilItem.isActive}"  @click="tabClick(chilItem,childIndex,index)">{{chilItem.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import falseData from '../../data.json'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num1:0,
      filterList:[
        {
          title:"授课方式：",
          labs:[
          {text:'全部',isActive:true},
          {text:'直播',isActive:false},
          {text:'录播',isActive:false}
          ]
        },
        {
          title:"排序方式：",
          labs:[
          {text:'全部',isActive:true},
          {text:'最新',isActive:false},
          {text:'最热',isActive:false},
          {text:'综合',isActive:false}
          ]
        }
      ]
    }
  },
  methods:{         
    tabClick:function(chilItem,childIndex,index){
        // (data,key,k)
        // 添加 active ==> true 显示 `active样式`
        this.filterList[index].labs.map(item => {
            item.isActive = false
        })
        this.filterList[index].labs[childIndex].isActive = true
                  // 选中的数据
                  let newArray = []
                  this.filterList.map(chilItem => {
                     chilItem.labs.map(item => {
                        if (item.isActive == true) {
                           newArray.push(item)
                        }
                     })
                  })
                  this.$emit('get-sel-data', newArray)
                  this.$emit('set-time', 0, 300, true)

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
  font-size:14px;
  line-height: 60px;
  float: left;
}
.course-cate{
    float: left;
    display: block;
    width: 60px;
   font-size:14px;
  line-height: 60px;
    text-align: center;
    cursor:pointer;
}

.course-cate.active{
  color:#35b4ec;
}

.course-filter2{
  margin-top:30px;
}
.course-filter2 a{
  display:block;
  width:50px;

  border-radius:5px;
  float: left;
  font-size:14px;
  color:#333;
  line-height: 30px;
  text-align: center;
  margin-left:15px;
}
.course-filter2 a.active{
    background:#35b4ec;
      color:#fff;
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
</style>
