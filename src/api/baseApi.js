import fetch from 'cross-fetch'

import defaultFetchOptions from './defaultFetchOptions'

export const getJson = url =>
	fetch(url, defaultFetchOptions.get)
		.then(checkStatus)

export const patchJson = (url, body) =>
	fetch(url, defaultFetchOptions.patch(body))
		.then(checkStatus)

export const putJson = (url, body) =>
	fetch(url, defaultFetchOptions.put(body))
		.then(checkStatus)

export const postJson = (url, body) =>
	fetch(url, defaultFetchOptions.post(body))
		.then(checkStatus)

export const deleteJson = (url, body) =>
	fetch(url, defaultFetchOptions.delete(body))
		.then(checkStatus)

export const checkStatus = response => {
	if (response.status >= 200 && response.status < 300)
		return response.json()
	else {
		const error = new Error(response.statusText)
		error.response = response.json()
		throw error
	}
}