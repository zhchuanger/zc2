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

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                movieList:[]
                
            }
        },
        created() {
            //跨域 域名(baidu.com) 端口(8080 8081) 协议(http https)
            //有一个不同即为跨域，都相同才是同源
            // 解决跨域问题：第三方服务器代理 jsonbird  https://bird.ioliu.cn/v1?url=
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
            // 成功走then 失败走catch
            .then((res)=>{
                console.log(res.data);
                this.movieList = res.data.subjects;

            }).catch((res)=>{
                console.log(res);
                
            })
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




</style>