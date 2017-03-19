<template>
	<!-- Quando coloco o bind na class o Vue entende que deve concatenar com a class que já existe -->
	<button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo"> {{ rotulo }}</button>
</template>

<script>
	export default {

		props: {

			tipo: {
				required: true,
				type: String
			},

			rotulo: {
				required: true,
				type: String
			},

			confirmacao: Boolean,

			estilo: String
		},

		methods: {

			disparaAcao() {

				if(this.confirmacao) {

					if(confirm('Deseja confirmar a operação?')) {
					// this.$emit realizar a comunicação entre um componente filho e seu componente pai.
					this.$emit('botaoAtivado');
				}
				return;
			}
			this.$emit('botaoAtivado');
		}
	},

	computed: {

		estiloDoBotao() {

				// Verifico se não foi passado o estilo para atribuir o estilo padrão.
				if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
				if(this.estilo == 'perigo') return 'botao-perigo';
			}
		}
	}
</script>

<style scoped>
	.botao {
		display: inline-block;
		padding: 10px;
		border-radius: 3px;
		margin: 10px;
		font-size: 1.2em;
	}

	.botao-perigo {
		background: firebrick;
		color: white;
	}

	.botao-padrao {
		background: darkcyan;
		color: white;
	}
</style>