import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie.vue'
import Music from './views/Music.vue'
import Book from './views/Book.vue'
import Photo from './views/Photo.vue'
import MovieDetail from './views/MovieDetail.vue'
import MusicDetail from './views/MusicDetail.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie
    },
    {
      path:'/movieDetail',
      name:'movieDetail',
      component: MovieDetail

    },
    {
      path: '/music',
      name: 'music',
      component: Music

    },
    {
      path:'/musicDetail',
      name:'musicDetail',
      component:MusicDetail

    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    }
    
  ]
})
