<template>
    <div class="footer" :style="{background:$store.state.color}">
        <!-- <router-link @click.native="$store.commit('change',{title:'电影',color:'red'})" to="/">电影</router-link> -->
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">{{obj.title}}</router-link>


    </div>
</template>

<script>

    import {mapMutations} from 'vuex';
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
                            color:'orange'
                        
                        },
                        {
                            title:'图书',
                            path:'/book',
                            color:'yellowgreen'
                        
                        },
                        {
                            title:'图片',
                            path:'/photo',
                            color:'#00bcd4'
                        
                        },
                        

                    ]
                }
        },
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