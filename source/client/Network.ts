import Data from '../Data.js';

enum RequestMethod {
    GET = 'GET', HEAD = 'HEAD', OPTIONS = 'OPTIONS', PATCH = 'PATCH',
    POST = 'POST', PUT = 'PUT', DELETE = 'DELETE', TRACE = 'TRACE'
}

type NetworkDefaults = {
    /** The host to use for outgoing requests instead of the current origin. */
    host: string,
    /** Headers to use for all outgoing requests */
    headers: HeadersInit,
    /** Headers to use for outgoing GET requests */
    getHeaders: HeadersInit,
    /** Headers to use for outgoing POST requests */
    postHeaders: HeadersInit
};

export default class Network {

    /**
     * Used specify default to use for all outgoing requests.
     */
    public static defaults: NetworkDefaults = {
        /* Cows are cool */
        host: null,
        headers: {},
        getHeaders: {},
        postHeaders: {},
    }

    /**
     * Sends a {@link method} request with optional body data and headers.
     * Uses the fetch API and {@link Network.defaults}
     * @param url The address of the server to make the request to.
     * @param body The body data to send to {@link url}
     * @param headers The headers to send to {@link url}
     * @returns The response from {@link url}
     */
    public static async request(url: string, method: RequestMethod = RequestMethod.GET, body: BodyInit | object = {}, headers: HeadersInit = {}) {
        if (Network.defaults.host !== null && url.match(/^[a-zA-Z]+:\/\//) === null) {
            url = Network.defaults.host + url;
        }
        if (typeof body === 'object') {
            body = body === null ? '' : JSON.stringify(body);
            headers['content-type'] = 'application/json';
        }
        return await fetch(url, {
            method: method,
            credentials: 'include',
            headers: {
                ...Network.defaults.headers,
                ...Data.conditional(method === RequestMethod.GET, Network.defaults.getHeaders),
                ...Data.conditional(method === RequestMethod.POST, Network.defaults.postHeaders),
                ...headers
            },
            body: body
        });
    }

    /**
     * Sends a post request with optional body data and headers.
     * Uses the fetch API and {@link Network.defaults}
     * @param url The address of the server to make the request to.
     * @param parameters The body data to send to {@link url}
     * @param headers The headers to send to {@link url}
     * @returns The response from {@link url}
     */
    public static async get(url: string, parameters: URLSearchParams, headers: HeadersInit = {}) {
        return await Network.request(url + '?' + parameters.toString(), RequestMethod.GET, null, headers);
    }

    /**
     * Sends a post request with optional body data and headers.
     * Uses the fetch API and {@link Network.defaults}
     * @param url The address of the server to make the request to.
     * @param body The body data to send to {@link url}
     * @param headers The headers to send to {@link url}
     * @returns The response from {@link url}
     */
    public static async post(url: string, body: BodyInit | object, headers: HeadersInit = {}) {
        return await Network.request(url, RequestMethod.POST, body, headers);
    }

    /**
     * Sends a put request with optional body data and headers.
     * Uses the fetch API and {@link Network.defaults}
     * @param url The address of the server to make the request to.
     * @param body The body data to send to {@link url}
     * @param headers The headers to send to {@link url}
     * @returns The response from {@link url}
     */
    public static async put(url: string, body: BodyInit | object, headers: HeadersInit = {}) {
        return await Network.request(url, RequestMethod.PUT, body, headers);
    }

    /**
     * Sends a patch request with optional body data and headers.
     * Uses the fetch API and {@link Network.defaults}
     * @param url The address of the server to make the request to.
     * @param body The body data to send to {@link url}
     * @param headers The headers to send to {@link url}
     * @returns The response from {@link url}
     */
    public static async patch(url: string, body: BodyInit | object, headers = {}) {
        return await Network.request(url, RequestMethod.PATCH, body, headers);
    }

    /**
     * Sends a delete request with optional body data and headers.
     * Uses the fetch API and {@link Network.defaults}
     * @param url The address of the server to make the request to.
     * @param body The body data to send to {@link url}
     * @param headers The headers to send to {@link url}
     * @returns The response from {@link url}
     */
    public static async delete(url: string, body: BodyInit | object, headers = {}) {
        return await Network.request(url, RequestMethod.DELETE, body, headers);
    }

}

Network.defaults.host;