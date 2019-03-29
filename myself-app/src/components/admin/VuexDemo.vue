<template>
  <div>
    <div style="width:200px;">
<el-input v-model="user.username" placeholder="请输入内容"></el-input>
    </div>
     
       <el-button  @click='login' type="primary">主要按钮</el-button >
  </div>
</template>
<script>
import Bus from "@/bus/bus"
export default {
  data() {
    return {
      user:{
        username:'hello ! everybody',
        password:'1111'
      }
    }
  },
  created(){

  },
  methods:{
   login(){
     this.$store.dispatch('LoginByUsername',this.user);  //vuex 兄弟组件通信修改值
      //  Bus.$emit('changed',this.user)
      //this.$router.go("/aboutlist/showArtical");
      this.$router.push("/");

    //  this.$router.push({
    //    name:'resume',
    //    query:{
    //      name:this.user.username
    //    },
    //  })
        
   }
  },
   watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
}
</script>
<style>
  
</style>

