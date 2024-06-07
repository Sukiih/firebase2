<template>
    <div class="login-container">
        <h2>Inicia sesión</h2>
        <input v-model="email" type="email" placeholder="Correo electrónico">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button class="custom-btn btn-3" @click="signIn"><span>Iniciar sesión</span></button>
    </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '@/auth';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async signIn() {
            try {
                const { email, password } = this;
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log('Sesión iniciada:', user);
            } catch (error) {
                console.error('Error al iniciar sesión:', error.message);
            }
        }
    }
};
</script>

<style>
/* Estilos para el contenedor principal */
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #3498db, #9b59b6); /* Fondo degradado */
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Sombra */
    max-width: 400px;
    margin: 0 auto;
}


h2 {
    color: #fff;
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: none;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.8); 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    font-size: 16px;
    color: #333;
    outline: none;
}

input::placeholder {
    color: #aaa;
}

/* Estilos para el botón */
.custom-btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(to bottom right, #2ecc71, #27ae60); 
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    position: relative;
    overflow: hidden;
}

.custom-btn:hover {
    background: linear-gradient(to bottom right, #1abc9c, #16a085); 
}

.custom-btn span {
    position: relative;
    z-index: 1;
}

</style>