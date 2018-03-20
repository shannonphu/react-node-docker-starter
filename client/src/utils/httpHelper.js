const config = require("../config");
const baseURL = `http://${config.server.host}:${config.server.port}`;

const headers = new Headers();

headers.set('Content-Type', 'application/json');

const reqConf = {
    headers: headers,
    credentials: 'include',
};

// Helper functions for the comon request types
export function smartFetch(method, endpoint, body) {
    return fetch(baseURL + endpoint, {
        method: method,
        body: body && JSON.stringify(body),
        ...reqConf
    }).catch((err) => {
        return Promise.reject(`${method} ${endpoint} with body ${body} failed.`);
    });
}

/**
 * make a get request
 * @param {string} endpoint
 * @returns {Promise}
 */
export function get(endpoint) {
    return smartFetch('GET', endpoint);
}

/**
 * make a post request
 * @param {string} endpoint
 * @param {Object} body
 * @returns {Promise}
 */
export function post(endpoint, body) {
    return smartFetch('POST', endpoint, body);
}

/**
 * make a put request
 * @param {string} endpoint
 * @param {Object} body
 * @returns {Promise}
 */
export function put(endpoint, body) {
    return smartFetch('PUT', endpoint, body);
}

export function del(endpoint) {
    return smartFetch('DELETE', endpoint);
}