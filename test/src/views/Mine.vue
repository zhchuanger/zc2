<template>
    <div>

        <h2>我的页面</h2>
        {{$route.params.id}}
        {{$route.query.id}}
        <router-view/>
        <router-link to="/mine/test1">子路由1</router-link>
        <router-link to="/mine/test2">子路由2</router-link>


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>