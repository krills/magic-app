export type CancelablePromise = {
	promise: Promise<any>;
	cancel: () => void;
}

export type ErrorHandler = (httpResponse: Response) => void;

export default class Api {
	errorHandler: ErrorHandler | undefined;

	setErrorHandler(errorHandler: ErrorHandler): this {
		this.errorHandler = errorHandler;
		return this;
	}

	makeCancelable(promise: Promise<any>): CancelablePromise {
		let hasCanceled_ = false;

		const wrappedPromise = new Promise((resolve, reject) => {
			promise.then(
				val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
				error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
			);
		});

		return {
			promise: wrappedPromise,
			cancel: () => {
				hasCanceled_ = true;
			}
		};
	};

	get(endpoint: string, params: {} = {}): Promise<Response> {
		const query = [];
		for (const [key, value] of Object.entries(params)) {
			query.push(key + '=' + value)
		}
		return this.__call(
			'GET',
			endpoint + (query.length ? '?' + query.join('&') : ''),
			{},
			null
		);
	}

	__call(type: string, endpoint: string, headers: {} = {}, data: {} | null): Promise<Response> {
		const options: RequestInit = {
			method: type,
			headers: headers
			//cache: 'no-cache'
		};
		if (data) {
			options.body = JSON.stringify(data);
		}
		const call = fetch(
			new Request('/api/cards' + endpoint),
			options
		);
		call.then(response => {
			console.log('catchall response: ',response)
			if (response.status === 403 && this.errorHandler) {
				this.errorHandler(response)
			}
		});
		return call;
	}
}