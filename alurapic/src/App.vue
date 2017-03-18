<template>
  <div class="corpo">

    <meu-menu :rotas="routes"></meu-menu>
    
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>

  import { routes } from './routes';
  import Menu from './components/shared/menu/Menu.vue';

  export default {

    components: {

      'meu-menu': Menu
    },

    data() {

      return {

        routes
      }
    }
  }
</script>

<style>
  .corpo {
    width: 96%;
    margin: 0 auto;
    font-family: Helvetica, sans-serif;
  }

  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s;
  }
</style>
