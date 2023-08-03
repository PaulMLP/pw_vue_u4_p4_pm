<template>
  <div class="datos-estu-cont">
    <div class="datos-estudiante">
      <label for="cedula">Cedula</label>
      <div class="cedula">
        <input
          id="cedula"
          type="text"
          v-model="cedula"
          placeholder="Ingrese cedula"
        />
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
    </div>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "@/modules/estudiante/helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: null,
      nombre: "",
      apellido: "",
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
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
