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
    static has(target: object, path: string | (string | number | symbol)[]): any;
    /**
     * Finds a retrieves a value at a {@link path} in a {@link target} object.
     * @param target The target object.
     * @param path The path to retrieve a value from.
     * @param fallback A value to fallback on if {@link path} couldn't be found.
     * @returns The value in {@link target} at {@link path}, or {@link fallback} if {@link path} can't be found.
     */
    static get(target: object, path: string | (string | number | symbol)[], fallback?: any): any;
    /**
     * Sets a {@link value} in a {@link target} object at {@link path}.
     * @param target The target object.
     * @param path The path to set {@link value} at.
     * @param value The value to be set.
     */
    static set(target: object, path: string | (string | number | symbol)[], value: any): void;
    /**
     * Removes a value at {@link path} in {@link target}.
     * @param target The target object.
     * @param path The path of the value to remove from {@link target}.
     * @returns The removed value, or null if no value was removed.
     */
    static remove(target: object, path: string | (string | number | symbol)[]): any;
}
