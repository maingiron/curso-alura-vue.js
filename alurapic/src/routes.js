import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [

	// O primeiro é a caminho que identifica o componente. 
	// O segundo o componente que será carregado para este caminho presente na url do navegador.
	{ path: '/', name: 'home', component: Home, titulo: 'Home', menu: true },
	{ path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
	{ path: '*', component: Home, menu: false }

];