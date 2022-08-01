export default class Data {
    static has(source: object, path: string | (string | number | symbol)[]): any;
    static get(source: object, path: string | (string | number | symbol)[], fallback?: any): any;
    static set(source: object, path: string | (string | number | symbol)[], value: any): void;
    static remove(source: object, path: string | (string | number | symbol)[]): void;
}
