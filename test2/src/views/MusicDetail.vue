<template>
    <div>
        <!-- {{$route.query.id}} -->
        <aplayer autoplay
        :music="musicData[0]"
        :list="musicData"
        :showLrc="true"
        v-if="show"

        />

    </div>
</template>

<script>
    import Aplayer from 'vue-aplayer'
    import axios from 'axios'
    export default {
        data() {
            return {
                musicData:[],
                show:false
                
            }
        },
        created() {
            axios.get('./data/musicdata.json')
            .then((res)=>{
                console.log(res.data);
                // 循环接口返回的音乐数组  处理成播放器需要的格式
                res.data.musicData.forEach((obj)=>{
                    let music = {
                        title:obj.title,
                        artist:obj.author,
                        src:obj.src,
                        pic:obj.musicImgSrc,
                        lrc:obj.lrc
                    }
                    this.musicData.push(music);

                })
                this.show = true;
                
            })
            .catch(()=>{

            })
        },
        components:{
            Aplayer
        }
        
    }
</script>

<style lang="scss" scoped>

</style>