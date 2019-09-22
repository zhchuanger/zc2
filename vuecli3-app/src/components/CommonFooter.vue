<template>
    <div id="footer" :style="{background:$store.state.color}">

        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path" >{{obj.title}}</router-link>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                menu:[
                    {
                        title:'电影',
                        path:'/',
                        color:'#ff5722'
                    },
                    {
                        title:'音乐',
                        path:'/music',
                        color:'#009688'
                    },
                    {
                        title:'图片',
                        path:'/photo',
                        color:'#ffeb3b'
                    },
                    {
                        title:'图书',
                        path:'/book',
                        color:'#4caf50'
                    },
                ]
            }
        },
        // 将store 中mutation中的方法映射出来
        methods:mapMutations(['change']),
        created() {
            this.menu.forEach((obj,index)=>{
                if(obj.path == this.$route.path){
                    this.change({title:obj.title,color:obj.color})
                }
            })
            
        },

        
    }
</script>

<style lang="scss" scoped>
#footer{
    height: 1rem;
    line-height: 1rem;
    width: 100%;
    background: red;
    position: fixed;
    bottom: 0;
    display: flex;
    a{
        flex: 1;
        text-align: center;
        &.router-link-exact-active{//点谁 谁出现此class
            color:#fff;

        }
    }
}

</style>