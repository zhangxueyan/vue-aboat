<template>
<div class="news-bulletin">
  <div class="container">
     <div class="bulletin-imgTexts clearfix">
        <div class="bulletin-imgText1 fl">
          <img src="static/images/pc_20.jpg">
          <p class="bulletin-text">政策解读|消防执法改革，市场是否不再需要注册消防工程师？NO！</p>
        </div>
        <div class="bulletin-imgText2 fl">
           <div class="bulletin-imgText2-1">
              <img src="static/images/pc_21.jpg">
              <p class="bulletin-text">2019一只船教育首届学员线下沙龙交流会在北京顺利举行</p>
           </div>
           <div class="bulletin-imgText2-1 mt-30">
              <img src="static/images/pc_23.jpg">
              <p class="bulletin-text">2018一消考试人数近90万人，突破历史新高</p>
           </div>   
        </div>
        <div class="bulletin-imgText2 fr">
           <div class="bulletin-imgText2-1">
              <img src="static/images/pc_22.png">
              <p class="bulletin-text">政策解读 | 新《消防法》出台，这些条例和考点可能都与你有关</p>
           </div>
           <div class="bulletin-imgText2-1 mt-30">
              <img src="static/images/pc_24.jpg">
              <p class="bulletin-text">消防工程师等13项资格证效力直接等同职称！</p>
           </div>   
        </div>
     </div>
     <div class="bulletin-box clearfix">
         <div class="bulletin-left">
           <h2 class="bulletin-titl">最新文章</h2>
           <ul class="bulletin-list">
             <li class="bulletin-item" v-for="item in curObject.bulletinList">
              <router-link :to="{name:'NewsDetail',params:{id:item.id}}">
                 <h3>{{item.title}}</h3>
                 <div class="bulletin-item-div clearfix">
                   <div class="bulletin-item-pic">
                    <img :src="item.imgUrl">
                  </div>
                  <p class="bulletin-item-text">{{item.text}}</p>
                </div>
                <p class="bulletin-item-sundry">
                  <i>{{item.date}}</i>
                  <i class="iconfont icon-yanjing"></i>{{item.count}}
                  <i class="iconfont icon-lishijilu"></i>历史记录
                </p>
              </router-link>
             </li>
           </ul>
           <a href="javascript:;" class="bulletin-more" @click = "loadMore">加载更多+</a>
         </div>
         <div class="bulletin-rigt">
            <h2 class="bulletin-titl">热门文章</h2>
            <ul class="hot-list">
              <li class="hot-item" v-for="item in curObject.bulletinHot">
                <router-link :to="{name:'NewsDetail',params:{id:item.id}}">
                   <p class="bulletin-hot-text">{{item.title}}</p>
                   <p class="bulletin-item-sundry">
                    <i>{{item.date}}</i>
                    <i class="iconfont icon-yanjing"></i>{{item.count}}
                    <i class="iconfont icon-lishijilu"></i>历史记录
                   </p>
                </router-link>
              </li>
            </ul>
         </div>
     </div>
  </div>
  <Slidebar></Slidebar>
</div>
</template>

<script>
import Slidebar from '../components/Slidebar'
import falseData from '../../data.json'
export default {
  name:'NewsBulletin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      curObject:falseData,
      count:0
    }
  },
 components: {
    Slidebar
  },
  watch:{
    count:function(val,oldval){
      // console.log(val)
      // console.log(oldval)
    }
  },
  methods:{
    loadMore:function(){
      var bulletinMore = this.curObject.bulletinMore;
      var bulletinList = this.curObject.bulletinList;
      var i = this.count;
      if(i<bulletinMore.length){
          var sliceData = bulletinMore.slice(i,i+2)
          this.curObject.bulletinList = bulletinList.concat(sliceData)
          this.count = i + 2
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bulletin-imgTexts{
  margin-top:20px;
}
.bulletin-imgTexts img{
  height: 100%;
}
.bulletin-imgText1{
  width:580px;
  height: 370px;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
}
.bulletin-text{
  width:100%;
  line-height: 40px;
  font-size:18px;
  position: absolute;
  color:#fff;
  background:rgba(0,0,0,0.5);
  padding:0 10px;
  left: 0;
  bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bulletin-imgText2{
  width:275px;
  margin-left:35px;
}
.bulletin-imgText2-1{
  position: relative;
  overflow: hidden;
  height: 170px;
}
.bulletin-imgText2 .bulletin-text{
  font-size:14px;
}
.mt-30{
  margin-top:30px;
}
.bulletin-left{
  width:800px;
  float: left;
}
.bulletin-titl{
  font-size: 18px;
  color: #333;
  line-height: 56px;
}
.bulletin-item{
  padding:30px 0 10px;
  border-bottom:1px dashed #aeb2b5;
}
.bulletin-item h3{
  font-size: 24px;
  color: #333;
}
.bulletin-item-pic{
  width:200px;
  height:120px;
  overflow: hidden;
  float: left;
}
.bulletin-item-pic img{
  height:100%;
}
.bulletin-item-text{
  width: 560px;
  font-size: 14px;
  color:#666;
  line-height: 30px;
  float: right;
}
.bulletin-item-sundry{
  font-size: 14px;
  color:#aeb2b5;
  line-height:40px;
}
.bulletin-item-div{
  margin-top:20px;
}
.bulletin-item-sundry i{
  padding:0 5px;
}
.bulletin-list{
  border-top:1px solid #aeb2b5;
}
.bulletin-box{
  margin-top:20px;
}
.bulletin-rigt{
    width:360px;
    float: right;
}
.hot-list{
  border-top:1px solid #ccc;
}
.hot-item{
 padding-top:10px;
}
.bulletin-hot-text{
  font-size: 14px;
  color:#666;
  line-height:24px;
}
.bulletin-more{
  text-align: center;
  font-size: 24px;
  color:#000;
  line-height:60px;
  border: 1px solid #ccc;
  margin-top:30px;
}
</style>
