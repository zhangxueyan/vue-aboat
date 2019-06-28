import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import CourseList from '@/pages/CourseList'
import CourseDetail from '@/pages/CourseDetail'
import QuestionBank from '@/pages/QuestionBank'
import QaCommunity from '@/pages/QaCommunity'
import TeacherList from '@/pages/TeacherList'
import TeacherDetail from '@/pages/TeacherDetail'
import NewsBulletin from '@/pages/NewsBulletin'
import NewsDetail from '@/pages/NewsDetail'
import OpenClass from '@/pages/OpenClass'

import Index from '@/pages/Index'
Vue.use(Router)


//组件文件名和 组件名 都是首字母大写  name是驼峰
export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/Home'
    },
    {
      path: '/Index',
      name:'Index',
      component: Index,
    },
    {
      path: '/Home',
      name:'Home',
      component: Home,
    },
    {
      path: '/CourseList',
      name:'CourseList',
      component: CourseList
    },
    { name:'CourseDetail',
      path: '/CourseDetail/:id',
      component: CourseDetail
    },
    { name:'QuestionBank',
      path: '/QuestionBank',
      component: QuestionBank
    },
    { name:'QaCommunity',
      path: '/QaCommunity',
      component: QaCommunity
    },
    { name:'TeacherList',
      path: '/TeacherList',
      component:TeacherList
    },
    { name:'TeacherDetail',
      path: '/TeacherDetail/:id',
      component:TeacherDetail
    },
    { name:'NewsBulletin',
      path: '/NewsBulletin',
      component: NewsBulletin
    },
    { name:'NewsDetail',
      path: '/NewsDetail/:id',
      component: NewsDetail
    },
    { name:'OpenClass',
      path: '/OpenClass',
      component: OpenClass
    }
  ]
})
