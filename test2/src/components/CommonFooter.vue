<template>
    <div class="footer">
        <router-link to="/">电影</router-link>
        <router-link to="/music">音乐</router-link>
        <router-link to="/book">图书</router-link>
        <router-link to="/photo">图片</router-link>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer{
    background:  rgb(8, 140, 192);
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    a{
        flex: 1;
        text-align: center;
        &.router-link-exact-active{
            color: #fff;
        }
    }
    
}
</style>