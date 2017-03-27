export default class FotoService {

	constructor(resource) {

		// $resource é um objeto especializado no consumo de API que segue o padrão REST.
		this._resource = resource('v1/fotos{/id}');
	}

	cadastra(foto) {

		return this._resource
			.save(foto);
	}

	lista() {

		return this._resource
			// query realiza a busca na API (parecido com o verbo get).
			.query()
			.then(res => res.json());
	}

	apaga(id) {

		return this._resource.delete({ id });
	}

}