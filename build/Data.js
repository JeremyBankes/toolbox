export default class Data {
    static has(source, path) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return true;
        }
        else {
            const key = path.shift();
            if (typeof source === 'object' && source !== null && key in source) {
                return Data.has(source[key], path);
            }
            else {
                return false;
            }
        }
    }
    static get(source, path, fallback = null) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return source;
        }
        else {
            const key = path.shift();
            if (typeof source === 'object' && source !== null && key in source) {
                return Data.get(source[key], path, fallback);
            }
            else {
                return fallback;
            }
        }
    }
    static set(source, path, value) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length > 0) {
            const key = path.shift();
            if (path.length === 0) {
                source[key] = value;
            }
            else {
                if (typeof source[key] !== 'object' && source[key] !== null) {
                    source[key] = path.length > 0 && !isNaN(parseInt(path[0].toString())) ? [] : {};
                }
                Data.set(source[key], path, value);
            }
        }
    }
    static remove(source, path) {
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
        }
        else if (key in source) {
            Data.remove(source[key], path);
        }
    }
}
