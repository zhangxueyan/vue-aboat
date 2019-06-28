<template>
  <div>
    <div v-for="item in items">
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:["1aaa","2aaa","3aaa","4aaa","5aaa","6aaa","7aaa","8aaa","9aaa","10aaa","11aaa","12aaa"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  line-height:80px;
  font-size: 16px;
}
</style>
