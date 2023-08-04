<template>
  <div class="estudiante">
    <h1>Consultar</h1>
    <DatosEstudiante :cedulaPath="cedula" />
  </div>
</template>

<script>
import DatosEstudiante from "../components/DatosEstudiante.vue";
export default {
  components: {
    DatosEstudiante,
  },
  data() {
    return {
      cedulaPath: null,
    };
  },
  mounted() {
    const { cedula } = this.$route.params; //arreglo de todos los path variables que correspondan a esta ruta
    console.log(cedula);
    this.cedulaPath = cedula;
  },
};
</script>

<style scoped></style>
