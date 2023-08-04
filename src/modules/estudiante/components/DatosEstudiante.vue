<template>
  <div class="datos-estu-cont">
    <div class="datos-estudiante">
      <label for="cedula">Cedula</label>
      <div class="cedula">
        <input id="cedula" type="text" v-model="cedula" />
        <div class="buscar" @click="consultarEstudiante">🔎</div>
      </div>
    </div>
    <div class="datos-estudiante">
      <div class="campos">
        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" v-model="nombre" disabled />
      </div>
      <div class="campos">
        <label for="apellido">Apellido</label>
        <input id="apellido" type="text" v-model="apellido" disabled />
      </div>
      <div class="campos">
        <label for="provincia">Provincia</label>
        <input id="provincia" type="text" v-model="provincia" disabled />
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "@/modules/estudiante/helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: this.$route.params.cedula,
      nombre: null,
      apellido: null,
      provincia: null,
    };
  },
  mounted() {
    const { cedula } = this.$route.params; //arreglo de todos los path variables que correspondan a esta ruta
    console.log(this.$route);
    const { provincia } = this.$route.query;
    console.log(provincia);
    this.consultarEstudiante();
    //http://localhost:8081/..../estudiantes/{}
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.cedula = data.cedula;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.provincia = data.provincia;
    },
  },
};
</script>

<style scoped>
.datos-estu-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
.datos-estudiante {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 300px;
  padding: 30px;
  box-shadow: 0 0 10px gray;
  border: solid 1px rgb(204, 203, 203);
  border-radius: 5px;
}
label,
input {
  width: 100%;
  height: fit-content;
  outline: none;
  margin: 0;
  padding: 0;
}

.cedula {
  display: flex;
  gap: 10px;
  width: 100%;
  height: 30px;
}
.buscar {
  cursor: pointer;
  height: inherit;
  width: 10px;
  padding: 0;
  margin: 0;
}
.buscar:hover {
  font-size: 1.2rem;
}
.campos {
  width: 100%;
}
</style>
