import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/ProductsViews.vue";
import prodcutdetaill from "../views/ProductDetaill.vue";
import Login from "../views/Login.vue";
import register from "../views/register.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import DeliveryMethod from "../views/DeliveryMethod.vue";
import Bill from "../views/Bill.vue";
import PurchaseHistory from "../views/PurchaseHistory.vue";
import About from "../views/About.vue";
import Art from '../views/Art.vue';
import Artist from '../views/Artist.vue';
import Artcontent from "../components/artcontent.vue";
import Artistcontent from "../components/artistcontent.vue";
//import Shop from "../views/Shop.vue";
import ArtDetail from "../components/artdetail.vue"
import Artistdetail from "../components/artistdetail.vue";

const routes = [
  
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/product/:id", component: prodcutdetaill, props: true },
  { path: "/login", component: Login },
  { path: "/register", component: register },
  { path: "/checkout", name: "checkout", component: CheckoutPage },
  { path: "/delivery-method", component: DeliveryMethod },
  { path: "/bill", name: "bill", component: Bill },
  { path: "/history", name: "history", component: PurchaseHistory },
  { path: '/art', component: Art },
  { path: '/artist', component: Artist },
  { path: '/artcontent', component: Artcontent },
  { path: '/artistcontent', component: Artistcontent },
  { path: '/art/:id', name: 'ArtDetail', component: ArtDetail },
  { path: '/artist/:id', name: 'Artistdetail', component: Artistdetail },




  {
    path: "/About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
