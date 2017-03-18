<template>
	<nav>
		<ul>
			<!-- O componente router-link direciona para o componente sem recarregar a página, o que é um comportamento de uma SPA -->
			<li v-for="rota in rotas">
				<router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {

		props: {
			rotas: {
				type: Array, 
				required: true
			}
		}
	}
	
</script>

<style scoped>
	
</style>