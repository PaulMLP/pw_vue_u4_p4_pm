import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/modules/estudiante/pages/ConsultaEstudiante"),
  },
  {
    path: "/registro",
    component: () => import("@/modules/estudiante/pages/GuardaEstudiante"),
  },
  {
    path: "/actualizar",
    component: () => import("@/modules/estudiante/pages/ActualizarEstudiante"),
  },
  {
    path: "/eliminar",
    component: () => import("@/modules/estudiante/pages/EliminarEstudiante"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
