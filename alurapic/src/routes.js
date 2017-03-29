import Home from './components/home/Home.vue';

// Realiza o code splitting e lazy loading para carregar somente quando for chamado.
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');

export const routes = [

	// O primeiro é a caminho que identifica o componente. 
	// O segundo o componente que será carregado para este caminho presente na url do navegador.
	{ path: '/', name: 'home', component: Home, titulo: 'Home', menu: true },
	{ path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
	{ path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false },
	{ path: '*', component: Home, menu: false }

];