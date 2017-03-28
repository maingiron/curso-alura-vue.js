export default class FotoService {

	constructor(resource) {

		// $resource é um objeto especializado no consumo de API que segue o padrão REST.
		this._resource = resource('v1/fotos{/id}');
	}

	cadastra(foto) {

		// Se existir a foto, altero. Se não existir, gravo.
		if(foto._id) {

			return this._resource
				.update({ id: foto._id }, foto);
		} else {

			return this._resource
			.save(foto);
		}
	}

	lista() {

		return this._resource
			// query realiza a busca na API (parecido com o verbo get).
			.query()
			.then(res => res.json(), err => {

				console.log(err);
				throw new Error('Não foi possível conectar com a API.')
			});
	}

	apaga(id) {

		return this._resource
			.delete({ id })
			.then(null, err => {

				console.log(err);
				throw new Error('Não foi possível remover a foto.');
			})
	}

	busca(id) {

		return this._resource
			.get({id})
			.then(res => res.json());
	}

}