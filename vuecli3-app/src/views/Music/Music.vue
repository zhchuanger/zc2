<template>
    <div>
        <ul class="musiclist">
            <li v-for="(obj,index) in musiclist" :key="index" @click="goto(obj.id)">
                <img :src="obj.bg" alt="">
            </li>
        </ul>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                musiclist:[]
            }
        },
        created() {
            axios.get('./data/musiclist.json')
            .then((res)=>{
                console.log(res);
                this.musiclist = res.data.albums;
            }).catch((res)=>{
                alert('服务器错误');


            })
            
        },
        methods: {
            goto(id){
                this.$router.push({path:'/musicDetail',query:{id}})

            }
            
        },
        
    }
</script>

<style lang="scss" scoped>
.musiclist{
    display: flex;
    flex-wrap: wrap;
    li{
        width: 50%;
        img{
            width: 100%;
            display: block;

        }
    }
}

</style>