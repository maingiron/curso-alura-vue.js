import Vue from 'vue'
import App from './App.vue'

// Aqui registro os módulos/rotas baixados
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/style.css';
import './assets/js/function.js';

Vue.use(VueResource);

// Quando rodarmos npm run dev, a variável de ambiente não existirá e o endereço considerado será http://localhost:3000. 
// Quando rodarmos npm run build, o endereço será aquele definido em API_URL (em webpack.config.js).
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

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
