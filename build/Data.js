/**
 * A data manipulation module primarily used for reading and altering objects.
 */
export default class Data {
    /**
     * Checks to see if a given {@link target} object has a given {@link path}.
     * @param target The target object.
     * @param path The path to check the existance of.
     * @returns True if {@link target} has {@link path}.
     */
    static has(target, path) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return true;
        }
        else {
            const key = path.shift();
            if (typeof target === 'object' && target !== null && key in target) {
                return Data.has(target[key], path);
            }
            else {
                return false;
            }
        }
    }
    /**
     * Finds a retrieves a value at a {@link path} in a {@link target} object.
     * @param target The target object.
     * @param path The path to retrieve a value from.
     * @param fallback A value to fallback on if {@link path} couldn't be found.
     * @returns The value in {@link target} at {@link path}, or {@link fallback} if {@link path} can't be found.
     */
    static get(target, path, fallback = null) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return target;
        }
        else {
            const key = path.shift();
            if (typeof target === 'object' && target !== null && key in target) {
                return Data.get(target[key], path, fallback);
            }
            else {
                return fallback;
            }
        }
    }
    /**
     * Sets a {@link value} in a {@link target} object at {@link path}.
     * @param target The target object.
     * @param path The path to set {@link value} at.
     * @param value The value to be set.
     */
    static set(target, path, value) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length > 0) {
            const key = path.shift();
            if (path.length === 0) {
                target[key] = value;
            }
            else {
                if (typeof target[key] !== 'object' && target[key] !== null) {
                    target[key] = path.length > 0 && !isNaN(parseInt(path[0].toString())) ? [] : {};
                }
                Data.set(target[key], path, value);
            }
        }
    }
    /**
     * Removes a value at {@link path} in {@link target}.
     * @param target The target object.
     * @param path The path of the value to remove from {@link target}.
     * @returns The removed value, or null if no value was removed.
     */
    static remove(target, path) {
        if (typeof path === 'string') {
            path = path.split('.');
        }
        if (path.length === 0) {
            return null;
        }
        const key = path.shift();
        if (path.length === 0) {
            const deleted = target[key];
            delete target[key];
            return deleted;
        }
        else if (key in target) {
            Data.remove(target[key], path);
        }
    }
}
