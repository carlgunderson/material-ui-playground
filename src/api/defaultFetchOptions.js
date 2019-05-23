const headers = {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
}

export default {
	get: { type: 'GET', headers },
	patch: body => ({ type: 'PATCH', headers, body: JSON.stringify(body) }),
	put: body => ({ type: 'PUT', headers, body: JSON.stringify(body) }),
	post: body => ({ type: 'POST', headers, body: JSON.stringify(body) }),
	delete: body => ({ type: 'DELETE', headers, body: JSON.stringify(body) })
}