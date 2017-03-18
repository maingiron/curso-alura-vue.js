<template>
  <div class="corpo">

    <nav>
      <ul>
        <!-- O componente router-link direciona para o componente sem recarregar a página, o que é um comportamento de uma SPA -->
        <li v-for="route in routes">
          <router-link :to="route.path ? route.path : '/'">{{ route.titulo }}</router-link>
        </li>
      </ul>
    </nav>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
  import { routes } from './routes';

  export default {

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
