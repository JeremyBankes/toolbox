export default class Data {

    public static has(source: object, path: string | (string | number | symbol)[]) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return true;
        } else {
            const key = path.shift();
            if (typeof source === 'object' && source !== null && key in source) {
                return Data.has(source[key], path);
            } else {
                return false;
            }
        }
    }

    public static get(source: object, path: string | (string | number | symbol)[], fallback: any = null) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return source;
        } else {
            const key = path.shift();
            if (typeof source === 'object' && source !== null && key in source) {
                return Data.get(source[key], path, fallback);
            } else {
                return fallback;
            }
        }
    }

    public static set(source: object, path: string | (string | number | symbol)[], value: any) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length > 0) {
            const key = path.shift();
            if (path.length === 0) {
                source[key] = value;
            } else {
                if (typeof source[key] !== 'object' && source[key] !== null) {
                    source[key] = path.length > 0 && !isNaN(parseInt(path[0].toString())) ? [] : {};
                }
                Data.set(source[key], path, value);
            }
        }
    }

    public static remove(source: object, path: string | (string | number | symbol)[]) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return;
        }
        const key = path.shift();
        if (path.length === 0) {
            delete source[key];
            return;
        } else if (key in source) {
            Data.remove(source[key], path);
        }
    }

}