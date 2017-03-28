<template>
	<div>
		<h1 class="centralizado">Cadastro</h1>
		<h2 class="centralizado"></h2>

		<h2 v-if="foto._id" class="centralizado">Alterando</h2>
		<h2 v-else class="centralizado">Incluíndo</h2>

		<!-- O modificador prevent cancela o comportamento padrão do evento. -->
		<form @submit.prevent="grava()">
			<div class="controle">
				<label for="titulo">TÍTULO</label>
				<!-- A diretiva v-model realiza o Two-way data binding. O modificador lazy faz a associação somente quando o campo perde o foco. -->
				<input id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
			</div>

			<div class="controle">
				<label for="url">URL</label>
				<input id="url" autocomplete="off" v-model.lazy="foto.url">
				<!-- A diretiva v-show mostra a foto somente quando tiver uma url digitada. -->
				<imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
			</div>

			<div class="controle">
				<label for="descricao">DESCRIÇÃO</label>
				<textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
			</div>

			<div class="centralizado">
				<meu-botao rotulo="GRAVAR" tipo="submit"/>
				<router-link :to="{ name: 'home' }"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
			</div>

		</form>
	</div>
</template>

<script>

	import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
	import Botao from '../shared/botao/Botao.vue';
	import Foto from '../../domain/foto/Foto';
	import FotoService from '../../domain/foto/FotoService';

	export default {

		components: {

			'imagem-responsiva': ImagemResponsiva, 
			'meu-botao': Botao
		},

		data() {
			
			return {

				foto:	new Foto(),
				// Com o $route extraio o parâmetro passado na rota para utilizar no componente.
				id: this.$route.params.id
			}
		},

		methods: {

			grava() {

				this.service
					.cadastra(this.foto)
					// Caso tenha sucesso, limpo o form, se não, mostro o erro.
					.then(() => {

						// Caso seja uma alteração, volto para a home.
						if(this.id) this.$router.push({ name: 'home' });

						this.foto = new Foto()
					}, err => console.log(err));
			}
		},

		created() {

			this.service = new FotoService(this.$resource);

			// Caso exista a foto, preencho o form.
			if(this.id) {

				this.service
					.busca(this.id)
					.then(foto => this.foto = foto);
			}
		}
	}

</script>

<style scoped>
	.centralizado {
		text-align: center;
	}
	.controle {
		font-size: 1.2em;
		margin-bottom: 20px;

	}
	.controle label {
		display: block;
		font-weight: bold;
	}

	.controle label + input, .controle textarea {
		width: 100%;
		font-size: inherit;
		border-radius: 5px
	}

	.centralizado {
		text-align: center;
	}
</style>