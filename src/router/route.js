/* eslint-disable*/
//import Main from "_c/main/main";
const routes = [
  {
    path: "/",
    redirect: "dashboard"
  },
  {
    path: "/",
    component: () => import("_c/main/main.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("@/views/Home/home.vue")
      }
    ]
  }
];

export default routes;
