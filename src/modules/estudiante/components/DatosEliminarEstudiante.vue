<template>
  <div class="datos-estu-cont">
    <div class="datos-estudiante">
      <div class="campos">
        <label for="id">Id</label>
        <input id="id" type="text" v-model="id" placeholder="Ingrese id" />
      </div>
      <div class="button">
        <button @click="eliminarEstudiante">Eliminar</button>
      </div>
    </div>
    <div v-if="estudiante" class="info">
      <h5>Estudiante eliminado</h5>
    </div>
  </div>
</template>

<script>
import { eliminarEstudianteFachada } from "@/modules/estudiante/helpers/EstudianteCliente";

export default {
  data() {
    return {
      id: null,
      estudiante: null,
    };
  },
  methods: {
    async eliminarEstudiante() {
      this.estudiante = await eliminarEstudianteFachada(this.id);
      console.log(this.estudiante);
    },
  },
};
</script>

<style scoped src="../css/formulario.css"></style>
