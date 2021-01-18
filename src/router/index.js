import Vue from "vue";
import VueRouter from "vue-router";

import AdmLayout from '@/components/AdmLayout'
import NotFound from '@/components/NotFound'

import AuthRoutes from "@/pages/auth";
import MainRoutes from '@/pages/main'
import UserRoutes from '@/pages/user'
import StoreRoutes from '@/pages/store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: AdmLayout,
    children: [
      ...MainRoutes,
      ...UserRoutes,
      ...StoreRoutes
    ]
  },
  ...AuthRoutes,
  {
		path: '*',
		component: NotFound
	}
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
});

export default router;
