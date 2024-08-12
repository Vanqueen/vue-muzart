import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/Home.vue';
import Se_Connecter from "@/views/Se_Connecter.vue";
import HPage_principale from "@/components/HPage_principale.vue";
import HMusic from "@/components/HMusic.vue";
import HAlbum from "@/components/HAlbum.vue";


const routes = [
    {
      path:"/", 
      component: Home, 
      // children:[
      //   { 
      //    path:"/", component: HPage_principale,
       
      //   },
      //   { 
      //     path:"/Home/HMusic", component: HMusic,
      //   },
      //   { 
      //     path:"/Home/HAlbum", component: HAlbum,
      //   },
      // ]
    },
    {
      path:"/se_connecter",
      component: Se_Connecter    
    },
  ]


  const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
