export type CookieOptions = {
    path?: string,
    domain?: string,
    maxAge?: number,
    expires?: Date,
    secure?: boolean,
    sameSite?: 'lax' | 'strict' | 'none'
};

export default class Cookies {

    /**
     * Retrieves a cookie by name.
     * @param name The name of the cookie to get the value of.
     * @returns The cookie named {@link name}, or null if it does not exist.
     */
    public static get(name: string) {
        const valueStrings = document.cookie.split(';');
        for (const valueString of valueStrings) {
            const [possibleKey, value] = valueString.trim().split('=').map(decodeURIComponent);
            if (name === possibleKey) {
                return value;
            }
        }
        return null;
    }

    /**
     * Retrieves a JSON cookie by name.
     * @param name The name of the cookie to get the value of.
     * @returns The cookie named {@link name}, or null if it does not exist, or cannot be parsed as JSON.
     */
    public static getJson(name: string) {
        try {
            return JSON.parse(Cookies.get(name));
        } catch (error) {
            return null;
        }
    }

    /**
     * Sets a cookie named {@link name} to {@link value}.
     * @param name The name of the cookie to set the value of.
     * @param value The value of the cookie to be set.
     */
    public static set(name: string, value: string, options: CookieOptions = {}) {
        const pieces = [`${name}=${encodeURIComponent(value)}`];
        if ('path' in options) {
            pieces.push(`path=${options.path}`);
        }
        if ('domain' in options) {
            pieces.push(`domain=${options.domain}`);
        }
        if ('maxAge' in options) {
            pieces.push(`max-age=${options.maxAge}`);
        }
        if ('expires' in options) {
            pieces.push(`expires=${options.expires.toUTCString()}`)
        }
        if ('secure' in options && options.secure) {
            pieces.push('secure');
        }
        if ('sameSite' in options) {
            pieces.push(`samesite=${options.sameSite}`);
        }
        document.cookie = pieces.join('; ');
    }

    /**
     * Sets a cookie named {@link name} to {@link value} as JSON.
     * @param name The name of the cookie to set the value of.
     * @param value The value of the cookie to be set.
     */
    public static setJson(name: string, value: any, options: CookieOptions = undefined) {
        Cookies.set(name, JSON.stringify(value), options);
    }

    /**
     * Deletes a cookie named {@link name}.
     * @param name The name of the cookie to delete.
     */
    public static delete(name: string, options: CookieOptions = {}) {
        const pieces = [`${name}=`];
        if ('path' in options) {
            pieces.push(`path=${options.path}`);
        }
        if ('domain' in options) {
            pieces.push(`domain=${options.domain}`);
        }
        if ('secure' in options && options.secure) {
            pieces.push('secure');
        }
        if ('sameSite' in options) {
            pieces.push(`samesite=${options.sameSite}`);
        }
        pieces.push(`max-age=0`);
        document.cookie = pieces.join('; ');
    }

}