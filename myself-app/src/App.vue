<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:'你好',
    }
  }
}
</script>

<style>
body{
margin: 0;
padding: 0;

}
</style>
