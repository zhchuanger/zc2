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
    background: rgb(8, 140, 192);
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
}


</style>