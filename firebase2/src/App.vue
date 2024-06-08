<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/registro">Registro</router-link> |
    <router-link to="/login">Iniciar sesión</router-link>
    <div v-if= "user">
      <p>Usuario: {{ user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </nav>
<router-view/>
</template>

<script>
import {auth, onAuthStateChanged, signOut} from '@/auth';

export default{
  name: 'App',
  data() {
    return {
      user: null,
  };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user ? user : null;
    });
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.$router.push('/');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
