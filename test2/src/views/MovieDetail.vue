<template>
    <div>
        <!-- {{$route.query.id}} -->
        <img :src="movieDetail.images.small"/>




    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                movieDetail:{}
            }
        },
        created() {
            axios.get('./../data/moviedetail.json')
            .then((res)=>{
                this.movieDetail = res.data;


            }).catch(()=>{

            })
        },
        
    }
</script>

<style lang="scss" scoped>
img{
    width: 2rem;
}

</style>