import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/resume/Resume'
Vue.use(Router)
export const constantRouterMap = [{
    path: '/',
    name: "resume", //name?
    component: Resume,
  },
  {
    path: '/wechat',
    component: () => import('@/components/resume/wechat/WeChat'),
  },
  {
    path: '/aboutlist',
    component: () => import('@/components/aboutlist/list'),
    children: [{
        path: 'showArtical',
        component: () => import('@/components/aboutlist/ShowArtical'),
      },

    ]
  },
  {
    path: '/detail/:id',
    component: () => import('@/components/aboutlist/SingleArt'),
  }
];
export default new Router({
  mode:'history',
  scrollBehavior:()=>({
    y:0
  }),
  routes:constantRouterMap
})
