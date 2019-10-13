<template>
    <div>
        <my-swipe></my-swipe>
    
    </div>
</template>

<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';
    import MySwipe from './../../components/MySwipe';
    export default {
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