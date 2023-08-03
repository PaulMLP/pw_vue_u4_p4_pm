<template>
  <div class="app">
    <NavBar />
    <router-view class="view" />
  </div>
</template>

<script>
import NavBar from "./modules/estudiante/components/NavBar.vue";
import Estudiante from "./modules/estudiante/pages/ConsultaEstudiante.vue";
import GuardaEstudiante from "./modules/estudiante/pages/GuardaEstudiante.vue";

export default {
  name: "App",
  components: {
    Estudiante,
    GuardaEstudiante,
    NavBar,
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
h1 {
 text-align: center;
 margin: 50px;
 cursor: default;
}
.view {
  flex-grow: 1;
  padding: 0px 10px;
}
</style>
