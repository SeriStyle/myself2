import Vue from 'vue'
import Vuex from'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'
Vue.use(Vuex)
// function loginByUsername(username, password) {
//   console.log(username,password);
//   const data = {
//     username,
//     password
//   }
//   return request({
//     url: '/login/login',
//     method: 'post',
//     data
//   })
// }


const moduleA={
  state: {
    user: '',
    status: '',
    code: '',
    token: 'Hi ! guys',
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  getters:{
     getName(state){
         if(getToken()){
          state.token=getToken(); //由于页面刷新数据消失，这里使用了cookies，如果存在，就取里面的数据赋值
         }
        return state.token
     }
  },
  mutations:{
    SET_TOKEN:(state,token)=>{
      console.log(token);
      state.token = token;
    }
  },
  actions:{
     // 用户名登录
     LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
          commit('SET_TOKEN', username)
          setToken( username) //设置cookies
    },
  }
}

const store=new Vuex.Store({
   modules:{
    a:moduleA
   }
});
export default store
