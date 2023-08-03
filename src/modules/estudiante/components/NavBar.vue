<template>
  <div>
    <nav>
      <ul>
        <router-link to="/consultar"
          ><img src="../store/lupa.svg" alt="" /><span class="opcion"
            >Consular</span
          >
        </router-link>
        <router-link to="/registrar"
          ><img src="../store/agregar.png" alt="" /><span class="opcion"
            >Agregar</span
          >
        </router-link>
        <router-link to="/actualizar"
          ><img src="../store/actualizar.png" alt="" /><span class="opcion"
            >Actualizar</span
          >
        </router-link>
        <router-link to="/eliminar"
          ><img src="../store/eliminar.png" alt="" /><span class="opcion"
            >Eliminar</span
          >
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.opcion {
  font-size: 1rem;
}
img {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}
nav {
  background-color: #333;
  overflow: hidden;
  display: flex;
  height: 100%;
  width: 200px;
  justify-content: center;
}

nav a.router-link-exact-active,
nav a:hover {
  background-color: #51ae55;
}

ul {
  list-style: none;
  padding: 10px;
  display: flex;
  width: inherit;
  flex-direction: column;
}

a {
  display: flex;
  padding: 10px 50px 10px 10px;
  border-radius: 2px;
  color: white;
  text-decoration: none;
  text-align: left;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
}

@media (max-width: 800px) {
  .opcion {
    display: none;
  }
  nav {
    display: flex;
    width: fit-content;
  }
  nav a.router-link-exact-active,
  nav a:hover {
    background: #51ae55;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
  a {
    padding: 10px;
  }
  img {
    margin: 0;
  }
}
</style>
