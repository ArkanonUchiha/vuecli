<template>

  <div>
    <ul class="contenedor">
      <li v-for="(message, index) in messages" :key="message" :class="message">
        {{ index }} - {{ message }}
      </li>

      <button @click="addNewMessage" :class="[messages, btnclasses]">Agregar Mensaje</button>
    </ul>

    <p v-if="linterna">Encendido</p>
    <p v-else>Apagado</p>
    <button @click="turnOnOff">Mostrar/Ocultar Contenido</button>

    <br>

    <p v-show="showName">Edwin Brandon</p>
    <!-- <button @click="changeShowStatus">Mostrar/Ocultar Nombre</button> -->

    <br>

    <p>{{ isLinternaOn }}</p>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        messages: [
          'Salir a pasear',
          'Ir al cine',
          'Estudiar VueJS'
        ],
        btnclasses: 'normal',
        linterna: false,
        showName: false
      }
    },
    methods: {
      addNewMessage() {
        const message = 'Montar bicicleta';

        this.messages.push(message);
      },
      turnOnOff() {
        // Con true no hay un toggle del valor
        // this.linterna = true;
        this.linterna = !this.linterna;
        this.changeShowStatus();
      },
      changeShowStatus() {
        this.showName = !this.showName;
      }
    },
    computed: {
      isLinternaOn() {
        return this.linterna
        ? 'Linterna Encendida'
        : 'Linterna Apagada'
      }
    }
  }
</script>

<style>
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    width: calc(100vw - var(--scrollbar));
    min-height: 100vh;
    background-color: salmon;
  }

  ul {
    width: 50%;
    height: 180px;
    background-color: steelblue;
  }

  .normal {
    background-color: lightslategray;
  }
</style>
