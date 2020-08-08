import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import LayoutDefault from "~layouts/LayoutDefault";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LayoutDefault,
    children: [
      {
        path: "/",
        name: "home",
        component: () =>
          import(
            // prettier-ignore
            /* webpackChunkName: "home" */ "~views/Home.vue"
          )
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(
            // prettier-ignore
            /* webpackChunkName: "home" */ "~views/About.vue"
          )
      }
    ]
  }
  //   {
  //     path: "/",
  //     name: "Home",
  //     component: Home
  //   },
  //   {
  //     path: "/about",
  //     name: "About",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/About.vue")
  //   }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
