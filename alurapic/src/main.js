import Vue from 'vue'
import App from './App.vue'

// Aqui registro os módulos/rotas baixados
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';

Vue.use(VueResource);
// O http sempre usará a url abaixo
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);
Vue.use(VeeValidate, {
	// Traduz a mensagem de erro do VeeValidate para Português. 
	locale: 'pt_BR',
	dictionary: {
		pt_BR: {
			messages: msg
		}
	}
});

const router = new VueRouter({ 
	// routes: routes --> Em ES6, quando o valor e a propriedade possuem o mesmo nome,
	// pode simplismente colocar o nome.
	routes,
	// Uso o mode history para remover o # da url. 
	mode: 'history' 
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
