<template>
    <div class="header" :style="{background:$store.state.color}">
        {{$store.state.title}}
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.header{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background: red;
    position: fixed;
    top: 0;
    width: 100%;

}


</style>