/**
 * A String manipulation moduled used for formatting and interpreting text.
 */
export default class String {
    /**
     * Converts {@link string} to a url-slug. Note that this function treats camel casing as seperate words. Convert {@link string} to lower case first to avoid this functionality.
     * @param string The text to turn into a slug
     * @returns a-slug-string
     */
    static toSlug(string) {
        string = string.replace(/[^a-z0-9]+/gi, '-');
        string = string.replace(/(?!^)(?<!-)(?=[A-Z])/g, '-');
        string = string.replace(/^-|-$/g, '');
        return string.toLowerCase();
    }
    /**
     * Converts {@link string} to camelCase.
     * @param string The text to turn into camel case
     * @returns aCamelCaseString
     */
    static toCamel(string) {
        string = string.replace(/[^A-Za-z0-9]+/g, ' ').trim().toLowerCase();
        string = string.split(/ /g).map((piece, index) => {
            if (index > 0) {
                return piece.charAt(0).toUpperCase() + piece.substring(1);
            }
            return piece;
        }).join('');
        return string;
    }
}
;
