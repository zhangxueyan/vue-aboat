<template>
  <div id="app">
    <appNav></appNav>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <appFooter></appFooter>
  </div>
</template>

<script>
import appNav from './components/Nav'
import appFooter from './components/Footer'
export default {
  name: 'App',
  data () {
  	return{
  	}
  },
  components:{
  	appNav,
    appFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
