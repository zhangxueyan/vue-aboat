// 注意：一定是 exports，不是 export，否则会报错，报错信息是下列的中的内容不是 string
module.exports = {
    message: {
         lan:"中文/英文",
        btnText:'点击切换中英文',
        title: '运动品牌'
    },
    navMessages:{
    	items:[
	        {name:'首页',isActive:true,path:'/'},
	        {name:'发现课程',isActive:false,path:'/CourseList'},
	        {name:'实战题库',isActive:false,path:'/QuestionBank'},
	        {name:'问答社区',isActive:false,path:'/QaCommunity'},
	        {name:'公开课',isActive:false,path:'/OpenClass'},
	        {name:'名师专栏',isActive:false,path:'/TeacherList'},
	        {name:'新闻公告',isActive:false,path:'/NewsBulletin'}
    	]
    }
}