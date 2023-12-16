import { createRouter, createWebHistory } from 'vue-router'
// import { getAuth } from "firebase/auth"
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SigninView from "@/views/SigninView.vue"
import SignupView from "@/views/SignupView.vue"
import PostView from "@/views/PostView.vue"
import UserView from "@/views/user/UserView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninView
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView
  },
  {
    path: "/post",
    name: "post",
    component: PostView,
    meta: {
      requiresAuth: true
    }
  }
  ,
  {
    path: "/user/setting",
    name: "user",
    component: UserView,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   let currentUser = getAuth().currentUser;
//   if (currentUser) {
//     if (to.name == "home" || to.name == "signin" || to.name =="signup") {
//       next({
//         path: '/post'
//       })
//     } 
//   }
//   else if (requiresAuth) {
//     next({
//       path: '/signin'
//     })
//   } else {
//     next({
//       path: '/'
//     })
//   }
// })

export default router
