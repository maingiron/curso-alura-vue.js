import Vue from 'vue';

Vue.directive('meu-transform', {

	// bind é um hook chamado toda vez que a diretiva é associada ao elemento do DOM.
	bind(el, binding, vnode) {

		let current = 0;

		el.addEventListener('dblclick', function() {

			let incremento = 90;
			let animate = false;

			// Através de binding.value consigo pegar o paramêtro passado para a diretiva.
			if(binding.value) {

				incremento = binding.value.incremento;
				animate = binding.value.animate;
			}

			current += incremento;

			this.style.transform = `rotate(${current}deg)`;

			if(animate) 
				this.style.transition = 'transform .3s';

		});

	}

});