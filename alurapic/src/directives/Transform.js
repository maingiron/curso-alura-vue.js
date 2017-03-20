import Vue from 'vue';

Vue.directive('meu-transform', {

	// bind é um hook chamado toda vez que a diretiva é associada ao elemento do DOM.
	bind(el, binding, vnode) {

		let current = 0;

		el.addEventListener('dblclick', function() {

			let incremento = binding.value || 90;

			// Através de binding.modifiers.[modificador] consigo pegar o modificador passado para a diretiva.
			if(binding.modifiers.reverse) {
				current -= incremento;
			} else {
				current += incremento;
			}

			this.style.transform = `rotate(${current}deg)`;

			if(binding.modifiers.animate) 
				this.style.transition = 'transform .3s';

		});

	}

});