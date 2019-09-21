<template>
<!-- 总组件 -->
  <div id="app">
    <!-- 这是App.vue
    <common-header></common-header>
    <div class="container">
      zhaochuang
    </div>
    <common-footer></common-footer> -->
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <!-- <router-link to="/mine">Mine</router-link>| -->
      <!-- params传参 使用name -->
      <router-link :to="{name:'mine',params:{id:666,name:'小王'}}">Mine-params</router-link>|
      <!-- query传参 -->
      <router-link :to="{path:'/mine',query:{id:777,name:'小赵'}}">Mine-query</router-link>|
      <!-- <router-link to="/test">Test</router-link> -->
      <!-- 通过路径传参 -->
      <router-link to="/test/5/lisi">Test</router-link>|
      <router-link to="/aaa">重定向</router-link> |
      <router-link to="/c">跳转到c</router-link>
      <button @click="$router.push('/')">首页</button>
      <button @click="$router.go(-1)">上一页</button>
      <button @click="$router.go(1)">下一页</button>
    
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
      
  </div>
</template>

<script>
    // 1 导入
    // 2 components中声明
    // 3 template 中使用
    import CommonHeader from './components/CommonHeader';
    import CommonFooter from './components/CommonFooter';
    export default {
      components:{
        CommonHeader,
        CommonFooter
      },
      methods: {
        go(){
          this.$router.push('/');
        }
      },
        
    }
</script>

<style lang="scss" scoped>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 2s ease;

}
.fade-enter-to{
  opacity: 1;

}
.fade-leave{
  transform:translateX(0);

}
.fade-leave-active{
  transition: transform 1s ease;

}
.fade-leave-to{
  transform: translateX(100%);

}

</style>
