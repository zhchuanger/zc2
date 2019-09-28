<template>
    <div>
        <ul class="movie-box">
            <li class="movielist" v-for="(obj,index) in movieList" :key="index" @click="goDetail(obj.id)">
                <img :src="obj.images.medium" alt="">
                <div>
                    <h2>{{obj.original_title}}</h2>
                    <p>{{obj.collect_count}}已收藏</p>
                    <p>演员:<span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}}|</span></p>
                    <p>上映时间:{{obj.mainland_pubdate}}</p>

                </div>

            </li>
        </ul>
        <img class="loading" v-show="isshow" src="@/assets/images/loading.gif" alt="">
        
        

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                movieList:[],
                isshow :false,
                flag:true //是否可以再请求数据  true可以请求  false 不可以请求

            }
        },
        created() {
            this.getMovieList(this.movieList.length);
            window.onscroll = ()=>{
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    let clientHeight = document.documentElement.clientHeight;
                    let scrollHeight = document.documentElement.scrollHeight;
                    console.log(scrollHeight,scrollTop ,clientHeight);
                    if( Math.abs(scrollHeight - scrollTop - clientHeight) <1 ){
                        // 到底
                        this.getMovieList(this.movieList.length);
                    }
                }

            },

        methods: {
            getMovieList(num){
                this.isshow = true;//loading 正在请求
                if(this.flag){
                    this.flag = false//不可以请求
                    axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start='+num+'&count=10')
                    .then((res)=>{
                        console.log(res.data);
                        this.movieList = [...this.movieList,...res.data.subjects] ;
                        this.isshow = false;
                        this.flag = true;//请求成功 将flag = true 别人可以请求

                    }).catch((res)=>{
                        console.log(res);

                        
                    })

                }


            },
            goDetail(id){
                // this.$router.push('/moviedetail/' + id);
                this.$router.push({path:'/moviedetail',query:{id}});
                // this.$router.push('/moviedetail/' + id);


            }
            
        },
        
    }
</script>

<style lang="scss" scoped>
.movie-box{
    padding:0.2rem;
    .movielist{
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
    width:1.5rem;
    // height:3rem;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);

}


</style>