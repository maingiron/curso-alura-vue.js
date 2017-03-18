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

    <router-view></router-view>
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
</style>
