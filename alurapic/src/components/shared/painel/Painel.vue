<template>
  <div class="painel">

    <!-- Usado a diretiva v-on:dblclick para responder ao evento click na tag. -->
    <!-- O prefixo @ é um atalho para a diretiva v-on. -->
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>

    <!-- Coloco o componente transition para o Vue delimitar a área do template no qual fará a animação. Obrigatóriamente o componente precisa de um name. O componente adiciona dinamicamente nos seus elementos filhos as seguintes classes dinamicamente: [name]-enter, [name]-enter-active, e [name]-leave-active -->
    <transition name="painel-fade">
      <!-- Coloco a tag slot para receber e manter tudo que estiver dentro da tag meu-painel (App.vue). -->
      <!-- A diretiva v-show realiza um display none. Ela não pode ser usada diretamente na tag slot. -->
      <div class="painel-conteudo" v-show="visivel">
        <slot></slot>
      </div>
    </transition>
    
  </div>
</template>

<script>
  export default {

    props: ['titulo'],

    data() {

      return {

        visivel: true
      }
    }
  }
</script>

<!-- A propriedade scoped faz o CSS afetar apenas o próprio componente -->
<style scoped>
  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;
  }

  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .4s;
  }
</style>
