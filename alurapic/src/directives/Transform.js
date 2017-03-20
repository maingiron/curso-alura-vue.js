import Vue from 'vue';

Vue.directive('meu-transform', {

	// bind é um hook chamado toda vez que a diretiva é associada ao elemento do DOM.
	bind(el, binding, vnode) {

		let current = 0;

		el.addEventListener('dblclick', function() {

			current += 90;
			el.style.transform = `rotate(${current}deg)`;
		});

	}

});