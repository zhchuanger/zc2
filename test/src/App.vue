<template>
<!-- 总组件 -->
  <div id="app">
    <!-- 这是App.vue
    <common-header></common-header>
    <div class="container">
      zhaochuang
    </div>
    <common-footer></common-footer> -->
    <router-view/>
    <div id="nav">
      
      




    </div>
      





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
      }
        
    }
</script>

<style lang="scss" scoped>
.container{
  background: pink;
}


</style>
