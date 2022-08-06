export default class Cookies {

    /**
     * Retrieves a cookie by name.
     * @param name The name of the cookie to get the value of.
     * @returns The cookie named {@link name}, or null if it does not exist.
     */
    public static getValue(name: string) {
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
            return JSON.parse(Cookies.getValue(name));
        } catch (error) {
            return null;
        }
    }

    /**
     * Sets a cookie named {@link name} to {@link value}.
     * @param name The name of the cookie to set the value of.
     * @param value The value of the cookie to be set.
     */
    public static setValue(name: string, value: string) {
        const valueStrings = document.cookie.split(';');
        const cookieValueStrings = [];
        const newValueString = `${name}=${encodeURIComponent(value)}`;
        let overwritten = false;
        for (let valueString of valueStrings) {
            const [possibleKey] = valueString.trim().split('=').map(decodeURIComponent);
            if (name === possibleKey) {
                valueString = newValueString;
                overwritten = true;
            }
            cookieValueStrings.push(valueString);
        }
        if (!overwritten) {
            cookieValueStrings.push(newValueString);
        }
        document.cookie = cookieValueStrings.join(';');
    }

    /**
     * Sets a cookie named {@link name} to {@link value} as JSON.
     * @param name The name of the cookie to set the value of.
     * @param value The value of the cookie to be set.
     */
    setJson(name: string, value: any) {
        Cookies.setValue(name, JSON.stringify(value));
    }

}