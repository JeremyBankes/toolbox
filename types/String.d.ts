/**
 * A String manipulation moduled used for formatting and interpreting text.
 */
export default class String {
    /**
     * Converts {@link string} to a url-slug. Note that this function treats camel casing as seperate words. Convert {@link string} to lower case first to avoid this functionality.
     * @param string The text to turn into a slug
     * @returns a-slug-string
     */
    static toSlug(string: string): string;
    /**
     * Converts {@link string} to camelCase.
     * @param string The text to turn into camel case
     * @returns aCamelCaseString
     */
    static toCamel(string: string): string;
}
