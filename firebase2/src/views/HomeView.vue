<template>
  <div class="home-container">
    <img alt="payaso programador" src="https://assets.adnradio.cl/2020/07/Ec6erGPX0AMhn1u.jpeg">

    <h1>Cómo Convertirte en Programador en 24 Horas <br><i><sup> (Sin Perder la Cordura)</sup></i></h1>
    
    <div class="tutorial-content">
    
      <h2>Paso 1: Preparación Mental</h2>
      <p>Antes de sumergirte en el mundo de la programación, necesitas preparar tu mente para el desafío.</p>   
      <p>Encuentra un espejo, mírate fijamente a los ojos y repite tres veces:</p>
      <p><strong><i>"Soy un maestro del código, la depresión no tiene cabida en mi vida".</i></strong></p>
      <p>Si no te sientes ridículo al hacerlo, no lo estás haciendo bien.</p>
      <br>
      <h2>Paso 2: Elige Tu Lenguaje de Programación</h2>
      <p>Debes elegir un lenguaje de programación que sea lo más complicado posible para impresionar a tus amigos.</p> 
      <p>Recomendamos el antiguo lenguaje de programación COBOL, solo para aumentar tu nivel de masoquismo. </p>
      <p>Si tienes una pizca de sentido común, elige Python.</p>
      <br>
      <h2>Paso 3: Suministros Esenciales</h2>
      <p>Asegúrate de tener a mano una tonelada de café, algunos bocadillos poco saludables y una colección de memes de programación para los momentos de desesperación.</p> 
      <p>La música de fondo de los videojuegos retro de los años 80 es opcional, pero altamente recomendada.</p>
      <br>
      <h2>Paso 4: La Maratón de Codificación</h2>
      <p>Inicia tu maratón de codificación con un desafío absurdo, como construir un cohete espacial con solo dos líneas de código.</p> 
      <p>Luego, cuando fracases miserablemente, pasa a proyectos más realistas, como una calculadora que solo puede sumar números impares.</p>
      <br>
      <h2>Paso 5: Acepta el Caos</h2>
      <p>Es importante aceptar que el código nunca funcionará como esperas.</p> 
      <p>Abraza el caos y conviértete en un maestro del arte del "debugging".</p> 
      <p>Recuerda, si algo parece estar funcionando bien, seguramente te estás perdiendo un error oculto que arruinará todo más tarde.</p>
      <br>
      <h2>Paso 6: Celebración y Autopromoción</h2>
      <p>Una vez que hayas escrito tu primer "¡Hola Mundo!", es hora de celebrar como si hubieras ganado un premio Nobel.</p> 
      <p>Comparte tus logros en todas las redes sociales y prepárate para recibir aplausos falsos y la envidia de tus amigos que aún no pueden entender cómo abrir un archivo de texto.</p>
      <br>
      <h2>Paso 7: Enfrenta la Realidad</h2>
      <p>Finalmente, después de 24 horas de codificación frenética, date cuenta de que todavía no eres un genio de la programación.</p> 
      <p> Pero no te preocupes, la depresión puede esperar hasta mañana. </p>
      <p>Por ahora, disfruta de tu nuevo título de "Experto en Código de Emergencia".</p>
    
  </div>
    
  </div>
</template>

<script>

import AddUserComponent from '@/components/AddUserComponent.vue'

export default {
  name: 'HomeView',
  components: {
    AddUserComponent
  }
}
</script>

<style scoped>
img{
  max-width: 500px;
  margin: 30px 0;
  border: 2px solid rgba(255, 217, 0, 0.192);
  border-radius: 10px;
}
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: rgb(19, 27, 41);
}

.tutorial-content {
  margin-top: 20px;
  text-align: left;
  margin-left: 50px;
}

h2 {
  margin: 30px 0 ;
  color: rgb(13, 2, 39);
}

p {
  margin-bottom: 15px;
}
</style>

