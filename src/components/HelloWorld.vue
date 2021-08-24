<template>

  <div>
    <p>{{ message }}</p>
  </div>
  <!-- <ul>
    <li v-for="(message, index) in messages" :key="message">
      {{ index }} - {{ message }}
    </li>  
  </ul> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
      return {
        message: 'Saludo desde el componente HelloWorld'
      }
  }
}
</script>
