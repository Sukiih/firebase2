<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
// @ is an alias to /src
import AddUserComponent from '@/components/AddUserComponent.vue'

export default {
  name: 'HomeView',
  components: {
    AddUserComponent
  }
}
</script>
