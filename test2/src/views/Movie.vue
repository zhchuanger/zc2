<template>
    <div>
        <ul class="movieul">
            <li v-for="(obj,index) in movieList" :key="index" class="movieli">
                <img :src="obj.images.medium" alt="">
                <div>
                    <h2>{{obj.original_title}}</h2>
                    <p>{{obj.collect_count}} 已收藏</p>
                    <!-- obj.casts -->
                    <p>演员：<span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}} |</span></p>
                    <p>上映时间：{{obj.mainland_pubdate}}</p>
                    
                </div>
            </li>
        </ul>
        <img v-show="isshow" class="loading" src="@/assets/images/loading.gif" alt="">

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                movieList:[],
                isshow : false,
                flag:true
            }
        },
        created() {
            this.getMovieList(this.movieList.length);
            window.onscroll = ()=> {
                let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                let clientHeight = document.documentElement.clientHeight;
                let scrollHeight = document.documentElement.scrollHeight;
                if(Math.abs(scrollHeight-clientHeight-scrollTop)<1){
                    this.getMovieList(this.movieList.length);
                    
                }
                
            }
        },
        methods: {
            getMovieList(num){
                    //跨域 域名(baidu.com) 端口(8080 8081) 协议(http https)
                    //有一个不同即为跨域，都相同才是同源
                    // 解决跨域问题：第三方服务器代理 jsonbird  https://bird.ioliu.cn/v1?url=
                    this.isshow = true;
                    if(this.flag){
                        this.flag = false;//当前已经是发送请求状态 不可以继续请求
                        axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start='+num+'&count=10')
                        // 成功走then 失败走catch
                        .then((res)=>{
                            console.log(res.data);
                            this.movieList = [...this.movieList,...res.data.subjects];
                            this.isshow =false;
                            this.flag = true;//请求成功后 可继续请求

                        }).catch((res)=>{
                            console.log(res);
                            
                        })

                    }
                    
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.movieul{
    padding:0.2rem;
    .movieli{
        display: flex;
        img{
            width: 2rem;
            margin-right: 0.2rem;
        }
        margin-bottom: 0.2rem;
        border-bottom:1px solid #000;
    }

}
.loading{
    width: 1rem;
    height: 1rem;
    position: fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}




</style>