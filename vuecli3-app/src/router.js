import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie/Movie.vue'
import Music from './views/Music/Music.vue'
import Photo from './views/Photo/Photo.vue'
import Book from './views/Book/Book.vue'
import MovieDetail from './views/Movie/MovieDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path:'/music',
      name:'music',
      component:Music
    },
    {
      path:'/photo',
      name:'photo',
      component:Photo

    },
    {
      path:'/book',
      name:'book',
      component:Book
    },
    {
      path:'/moviedetail/:id',
      name:'moviedetail',
      component:MovieDetail
    }
    
  ]
})
