<template>
    <div>
        <transition-group name="fade" tag="ul" class="swipe-box">
            <li v-for="(obj,index) in imgList" :key="index" v-show="index==nowIndex">
                <img :src="obj" alt="">
            </li>
        </transition-group>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                nowIndex:0,
                // imgList:[
                //     "./img/photo/1.jpg",
                //     "./img/photo/2.jpg",
                //     "./img/photo/3.jpg"
                // ]
            }
        },
        // 父组件向子组件传值 在父组件中写这些值 在子组件中用props接收
        props:['imgList','speed','mode'],
        created() {
            setInterval(() => {
                this.nowIndex++;
                if(this.nowIndex == this.imgList.length){
                    this.nowIndex = 0;
                }
                
            }, this.speed);

            
        },
        
    }
</script>

<style lang="scss" scoped>
.swipe-box{
    position: relative;
    li{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        img{
            width:100%;
            height: 200px;
        }
    }
}
.slide-enter{
    transform: translateX(-100%);
}
.slide-enter-active{
    transition: transform 1s linear;
}
.slide-enter-to{
    transform:translateX(0);
}
.slide-leave{
    transform: translateX(0);
}
.slide-leave-active{
    transition: transform 1s linear;
}
.slide-leave-to{
    transform:translateX(100%);
}
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 2s linear;
}
.fade-enter-to{
    opacity: 1;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
    transition: opacity 2s linear;
}
.fade-leave-to{
    opacity: 0;
}

</style>