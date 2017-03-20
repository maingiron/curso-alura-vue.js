export default {

  bind(el, binding, vnode) {

    let current = 0;

    el.addEventListener('dblclick', function() {

        let incremento = binding.value || 90;
        let efeito;

        // Através de binding.arg que verifico a existência ou não de um argumento.
        if(!binding.arg || binding.arg == 'rotate') {

        		// Através de binding.modifiers.[modificador] consigo pegar o modificador passado para a diretiva.
            if(binding.modifiers.reverse) {
                current -= incremento;
            } else {
                current += incremento;
            }

            efeito = `rotate(${current}deg)`;

        } else if(binding.arg == 'scale') {

            efeito = `scale(${incremento})`;
        }

        this.style.transform = efeito;

        if(binding.modifiers.animate) 
        	this.style.transition = 'transform 0.5s';
    });
  }
};