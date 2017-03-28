import Vue from 'vue'
import App from './App.vue'

// Aqui registro os módulos/rotas baixados
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';

Vue.use(VueResource);
// O http sempre usará a url abaixo
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);
Vue.use(VeeValidate);

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
