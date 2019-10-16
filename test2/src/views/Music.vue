<template>
    <div>
        <ul class="musicul">
            <li v-for="(obj,index) in musicList" :key="index" @click="goDetail(obj.id)">
                <img :src="obj.bg" alt="">
            </li>
        </ul>


    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                musicList:[]
            }
        },
        created() {
            axios.get('./data/musiclist.json')
            .then((res)=>{
                console.log(res.data);
                this.musicList = res.data.albums;
                
                

            })
            .catch((res)=>{
                alert("服务器错误！")

            })
        },
        methods: {
            goDetail(id){
                this.$router.push({path:'/musicDetail',query:{id}})

            }
        },

        
    }
</script>

<style lang="scss" scoped>
.musicul{
    display: flex;
    flex-wrap: wrap;
    li{
        width:50%;
        img{
            width: 100%;
            display: block;
        }
    }
}

</style>