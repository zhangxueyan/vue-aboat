<template>
	<div class="index">
	   {{msg}}
	    <Slider :value.sync="value" range></Slider>
      <input type="text" v-model="name" @blur="$v.name.$touch()">
      <span v-if="!$v.name.required">姓名不能为空</span>

      <input type="text" v-model="age" @blur="$v.age.$touch()">
      <span v-if="!$v.age.between">年龄需在1-10</span>
	</div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
import myComponent from '../components/myComponent'
export default {
  name:'Index',
  data () {
    return{
      msg: 'Welcome to Your Vue.js App',
      value: [20, 50],
      name:'',
      age: " ",
      myArray:["bbb","bbb","bbb","bbb","bbb","bbb","bbb","bbb","bbb","bbb","bbb","bbb"],
      list:[
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'},
       {src:'static/images/mg.jpg'}
      ]
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(1, 10)
    }
  },
  created(){
    console.log(this.$v)
  },
  components:{
    myComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
