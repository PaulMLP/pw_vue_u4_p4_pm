<template>
  <div class="datos-estu-cont">
    <div class="datos-estudiante">
      <div class="campos">
        <label for="cedula">Cedula</label>
        <input
          id="cedula"
          type="text"
          v-model="cedula"
          placeholder="Ingrese cedula"
        />
      </div>
      <div class="campos">
        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          v-model="nombre"
          placeholder="Ingrese nombre"
        />
      </div>
      <div class="campos">
        <label for="apellido">Apellido</label>
        <input
          id="apellido"
          type="text"
          v-model="apellido"
          placeholder="Ingrese apellido"
        />
      </div>
      <div class="campos">
        <label for="provincia">Provincia</label>
        <input
          id="provincia"
          type="text"
          v-model="provincia"
          placeholder="Ingrese provincia"
        />
      </div>
      <div class="button">
        <button @click="guardarEstudiante">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "@/modules/estudiante/helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      provincia: null,
    };
  },
  methods: {
    guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: this.provincia,
      };
      ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style scoped src="../css/formulario.css"></style>
