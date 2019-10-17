<template>
    <div>
        <my-swipe :imgList="imgList" speed="1000" mode="fade"></my-swipe>

    </div>
</template>

<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    import MySwipe from "./../components/MySwipe"
    export default {
        data() {
            return {
                imgList:[
                    "./img/photo/1.jpg",
                    "./img/photo/2.jpg",
                    "./img/photo/3.jpg"
                ]
            }
        },
        components:{
            Swipe, 
            SwipeItem,
            MySwipe

        }
        
        
    }
</script>

<style lang="scss" scoped>
.my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.slide1 {
    background-color: #0089dc;
    color: #fff;
}

.slide2 {
    background-color: #ffd705;
    color: #000;
}

.slide3 {
    background-color: #ff2d4b;
    color: #fff;
}

</style>