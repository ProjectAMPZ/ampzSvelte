'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$2 = require('./index-4169654c.js');
var Cookie = _interopDefault(require('cookie-universal'));

const cookies = Cookie();
let tkn = cookies.get('token');
async function send({ method, path, data, token, cookie }) {
	const fetch =  require('node-fetch').default;
	const opts = {
		method, headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			// 'Cache': 'no-cache',
			'cookie': cookie
		},
		// credentials: 'include',
		mode: 'no-cors'
	};

	if (data) {
		// opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	let tkn = cookies.get('token');
	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}
	else if (tkn) {
		opts.headers['Authorization'] = `Bearer ${tkn}`;
	}
	try {
		let response = await fetch(`${index$2.apiUrl}/api/${path}`, opts);
		let json = await response.text();
		if (!response.ok) {
			throw json
		}
		try {
			return JSON.parse(json);
		} catch (e) {
			return json;
		}
	}
	catch (e) { throw e; }
}

function get(path, params, token, cookie) {
	// let token = tkn || auth.token
	return send({ method: 'GET', path, params, token, cookie });
}

function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

exports.get = get;
exports.post = post;
