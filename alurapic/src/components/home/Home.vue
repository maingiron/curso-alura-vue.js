<template>
  <div>
    <h1 class="text-center">{{ titulo }}</h1>

    <!-- v-on realiza um data binding unidirecional que flui da view para os dados -->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Use o filtro para filtrar" name="">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao tipo="button" rotulo="Remover"/>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from '../shared/painel/Painel.vue';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
  import Botao from '../shared/botao/Botao.vue';

  export default {
    
    components: {

      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },

    data() {

      return {
        titulo: 'Alurapic',
        fotos: [],
        filtro: ''
      }
    },

    computed: {

      fotosComFiltro() {

        if(this.filtro) {

          // Cria uma expressão com o valor digitado no filtro.
          // O @param i faz o texte ser case-insensitive.
          let exp = new RegExp(this.filtro.trim(), 'i');

          // Retorna apenas as fotos que condizem com a expressão.
          return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {

          return this.fotos;
        }
      }
    },

    created() {

      this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
    }
  }
</script>

<style>
  .text-center {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
