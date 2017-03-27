<template>
  <div>
    <h1 class="text-center">{{ titulo }}</h1>

    <p v-show="mensagem" class="text-center">{{ mensagem }}</p>

    <!-- v-on realiza um data binding unidirecional que flui da view para os dados -->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Use o filtro para filtrar" name="">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:rotate.animate="15" :url="foto.url" :titulo="foto.titulo"/>
          
          <!-- Coloco o bind na confirmacao para enviar o argumento como boolean -->
          <meu-botao tipo="button" rotulo="Remover" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo"/>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from '../shared/painel/Painel.vue';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
  import Botao from '../shared/botao/Botao.vue';
  import transform from '../../directives/Transform';
  import FotoService from '../../domain/foto/FotoService';

  export default {

    components: {

      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },

    directives: {

      'meu-transform': transform
    },

    data() {

      return {
        titulo: 'Alurapic',
        fotos: [],
        filtro: '',
        mensagem: ''
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

    methods: {

      remove(foto) {

        this.service
          .apaga(foto._id)
          .then(() => {
            
            // indexOf acha a posição da foto na lista.
            let indice = this.fotos.indexOf(foto);
            // splice remove um item do array.
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso!'
          }, err => {

            console.log(err);
            this.mensagem = 'Não foi possível remover a foto';
          });
      }
    },

    created() {

      this.service = new FotoService(this.$resource);

      this.service
        .lista()
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
