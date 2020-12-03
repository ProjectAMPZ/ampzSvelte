'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$2 = require('./index-4169654c.js');
var Cookie = _interopDefault(require('cookie-universal'));

const cookies = Cookie();
let tkn = cookies.get('token');
async function send({ method, path, data, params, token, cookie, auxUrl }) {
    let url = auxUrl ? auxUrl : `${index$2.nodeApiUrl}/api/${path}`;
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
	
	if(method=='GET' && params){
	
		 url += '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&');


	}

	let tkn = cookies.get('token');
	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}
	else if (tkn) {
		opts.headers['Authorization'] = `Bearer ${tkn}`;
	}
	try {
		let response = await fetch(url, opts);
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
	return send({ method: 'GET', path, params, token, cookie });
}

function post(path, data, token, auxUrl) {
	return send({ method: 'POST', path, data, token , auxUrl});
}

exports.get = get;
exports.post = post;
