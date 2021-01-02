import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import ('../views/home/home') 
const Category = () => import ('../views/category/category') 
const ShopCart = () => import ('../views/shopcart/shopcart') 
const Profile = () => import ('../views/profile/profile') 
const Detail = () => import ('../views/detail/detail') 
const Login = () => import ('../views/login/login')
const Register = () => import ('../views/register/register')

const routes =[
        {
            path:'',
            redirect: '/home'
        },
        {
            path:'/home',
            component: Home
        },
        {
            path:'/category',
            component: Category
        },
        {
            path:'/shopcart',
            component: ShopCart
        },
        {
            path:'/profile',
            component: Profile
        },
        {
            path:'/detail/:iid',
            component: Detail
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/register',
            component: Register
        }

]

const router=new VueRouter({
    routes,
    mode: 'history'
})

export default router