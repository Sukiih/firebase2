<template>
  <div>
      <h2>Registro</h2>
      <input v-model="email" type="email" placeholder="Correo electronico">
      <input v-model="password" type="password" placeholder="Contraseña">
      <button @click="register">Registrarse</button>
  </div>

</template>

<script>
import { auth, createUserWithEmailAndPassword } from '@/auth';

export default {
  date() {
      return {
          email: '',
          password: ''
      };
  },
  methods: {
      async register(){
          try{
              const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
              const user = userCredential.user;
              console.log('usuario registrado:', user);
          }catch(error){
              console.error('Error al registrar:', error.message)
          }
      }
  }
};

</script>

<style scoped>
/* Fondo y alineación del contenedor */
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f06, #f79);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

/* Estilo del título */
h2 {
    color: #fff;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
    font-size: 24px;
}

/* Estilo de los inputs */
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 16px;
}

/* Placeholder color */
input::placeholder {
    color: #aaa;
}

/* Estilo del botón */
button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Efecto hover en el botón */
button:hover {
    background-color: #218838;
}
</style>
