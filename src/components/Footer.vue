<template>
  <div class="foot-full">
      <div class="container clearfix">
         <div class="fot-div1 fl">
           <h2>上海新康教育</h2>
           <p>Copyright@2018   北京一只船教育科技有限公司　版权所有</p>
           <p>京ICP备16016526号-1 | 增值电信业务经营许可证：京B2-20180127 | 京网<br>文〔2018〕3080-294号</p>
         </div>
         <div class="fot-div2 fl clearfix">
           <a href="javascript:;">关于我们</a>
           <a href="javascript:;">品牌介绍</a>
           <a href="javascript:;">法律声明</a>
         </div>
         <div class="fot-div3 fr clearfix">
           <div class="fot-ways fl">
              <p>在这里关注我们的动向</p>
              <div class="fot-icons">
                <i class="iconfont icon-qq"></i>
                <i class="iconfont icon-changyonglogo28"></i>
                <i class="iconfont icon-weibo"></i>
              </div>
           </div>
           <div class="fot-code fr">
             <img src="../../static/images/pc_03.jpg">
           </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*footer*/
  .foot-full{
    background:#222327;
    padding:30px 0;
    margin-top:50px;
  }
  .fot-div1{
    width:600px;
  }
  .fot-div1 h2{
    color: #d0dcdc;
    font-size:16px;
  }
  .fot-div1 p{
    color: #949494;
    font-size: 12px;
    line-height:20px;
  }
  .fot-div2{
    width:200px;
    border-left:1px solid #3f4045;
    border-right:1px solid #3f4045;
  }
  .fot-div2 a{
    display: block;
    width:50%;
    color: #a1a4b3;
    font-size:12px;
    text-align: center;
    line-height: 36px;
    float: left;
  }
  .fot-ways p{
    font-size:12px;
    color:#909090;
    line-height: 40px;
  }
  .fot-icons i{
    font-size:18px;
    color:#999bab;
    cursor:pointer;
  }
  .fot-icons i:hover{
    color:#f49e00;
  }
  .fot-icons{
    margin-top:25px;
  }
  .fot-code{
    margin-left:20px;
  }
  .fot-div3{
    margin-top:30px;
  }
</style>
