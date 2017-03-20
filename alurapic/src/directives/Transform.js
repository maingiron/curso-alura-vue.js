import Vue from 'vue';

Vue.directive('meu-transform', {

	// bind é um hook chamado toda vez que a diretiva é associada ao elemento do DOM.
	bind(el, binding, vnode) {

		let current = 0;

		el.addEventListener('dblclick', function() {

			let incremento = binding.value || 90;
			let efeito;

			if(!binding.arg || binding.arg == 'rotate') {

				// Através de binding.modifiers.[modificador] consigo pegar o modificador passado para a diretiva.
				if(binding.modifiers.reverse) {
					current -= incremento;
				} else {
					current += incremento;
				}

				efeito = `rotate(${current}deg)`;

			// Através de binding.arg que verifico a existência ou não de um argumento.
			} else if(binding.arg == 'scale') {

				efeito = `scale(${incremento}`;
			}

			this.style.transform = efeito;

			if(binding.modifiers.animate) 
				this.style.transition = 'transform .3s';

		});

	}

});