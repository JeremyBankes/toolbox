type StringDefaults = {
    locale: Intl.LocalesArgument,
    dateFormat: Intl.DateTimeFormatOptions,
    timeFormat: Intl.DateTimeFormatOptions
};

type Precision = 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';

/**
 * A String manipulation moduled used for formatting and interpreting text. 
 */
export default class String {

    /** 
     * The default options for text manipulations and formatting
     */
    static defaults: StringDefaults = {
        locale: 'en-CA',
        dateFormat: { dateStyle: 'long' },
        timeFormat: { timeStyle: 'short' }
    }

    /**
     * Converts {@link string} to a url-slug. Note that this function treats camel casing as seperate words. Convert {@link string} to lower case first to avoid this functionality.
     * @param string The text to turn into a slug
     * @returns a-slug-string
     */
    public static toSlug(string: string) {
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
    public static toCamel(string: string) {
        string = string.replace(/[^A-Za-z0-9]+/g, ' ').trim().toLowerCase();
        string = string.split(/ /g).map((piece, index) => {
            if (index > 0) {
                return piece.charAt(0).toUpperCase() + piece.substring(1);
            }
            return piece;
        }).join('');
        return string;
    }

    /**
     * Makes {@link singular} plural.
     * @param singular The singular word to make plural.
     * @param count The number of {@link singular}. Not 1 to pluralize.
     * @returns The plural of {@link singular}.
     */
    public static pluralize(singular: string, count: number = 0) {
        if (count == 1) {
            return singular;
        }
        const plural = {
            '(quiz)$': "$1zes", '^(ox)$': "$1en", '([m|l])ouse$': "$1ice", '(matr|vert|ind)ix|ex$': "$1ices", '(x|ch|ss|sh)$': "$1es",
            '([^aeiouy]|qu)y$': "$1ies", '(hive)$': "$1s", '(?:([^f])fe|([lr])f)$': "$1$2ves", '(shea|lea|loa|thie)f$': "$1ves", 'sis$': "ses",
            '([ti])um$': "$1a", '(tomat|potat|ech|her|vet)o$': "$1oes", '(bu)s$': "$1ses", '(alias)$': "$1es", '(octop)us$': "$1i", '(ax|test)is$': "$1es",
            '(us)$': "$1es", '([^s]+)$': "$1s"
        };
        const irregular = { 'move': 'moves', 'foot': 'feet', 'goose': 'geese', 'sex': 'sexes', 'child': 'children', 'man': 'men', 'tooth': 'teeth', 'person': 'people' };
        const uncountable = ['sheep', 'fish', 'deer', 'moose', 'series', 'species', 'money', 'rice', 'information', 'equipment'];
        if (uncountable.indexOf(singular.toLowerCase()) >= 0) {
            return singular;
        }
        for (const word in irregular) {
            const pattern = new RegExp(word + '$', 'i');
            const replace = irregular[word];
            if (pattern.test(singular)) {
                return singular.replace(pattern, replace);
            }
        }
        for (const expression in plural) {
            const pattern = new RegExp(expression, 'i');
            if (pattern.test(singular)) {
                return singular.replace(pattern, plural[expression]);
            }
        }
        return singular;
    }

    /**
     * Converts a date object into strings of various formats.
     * @param date The date to convert.
     * @param format The format to use.
     * @returns A formatted date string.
     */
    public static fromDate(date: Date, format: 'iso' | 'form' | 'pretty' = 'pretty') {
        switch (format) {
            case 'iso': return date.toISOString();
            case 'form': return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().substring(0, 10);
            case 'pretty': return date.toLocaleDateString(String.defaults.locale, String.defaults.dateFormat);
            default: throw new Error(`Unrecognized date format ${format}.`);
        }
    }

    /**
    * Converts a string into a date object.
    * @param dateString The string to parse into a date.
    * @param formFormat If true, parses 'dateString' in the current timezone instead of UTC.
    * @returns The parsed date.
    */
    public static toDate(dateString: string, formFormat: string) {
        if (formFormat) {
            return new Date(new Date(dateString).getTime() + new Date().getTimezoneOffset() * 60000);
        } else {
            return new Date(dateString);
        }
    }

    /**
     * Converts a date or hours number into time strings of various formats.
     * @param hoursOfDayOrDate A number of hours in a day (0-24) or a date object to convert to a time string.
     * @param format The format of the time string.
     * @returns The formatted time string.
     */
    public static toTime(hoursOfDayOrDate: Date | number, format: 'form' | 'pretty' = 'pretty') {
        switch (format) {
            case 'form':
                let hours: number;
                let minutes: number;
                if (typeof hoursOfDayOrDate === 'number') {
                    hours = Math.floor(hoursOfDayOrDate);
                    minutes = Math.round((hoursOfDayOrDate - hours) * 60);
                } else {
                    hours = hoursOfDayOrDate.getHours();
                    minutes = hoursOfDayOrDate.getMinutes();
                }
                return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
            case 'pretty':
                if (typeof hoursOfDayOrDate === 'number') {
                    const hours = Math.floor(hoursOfDayOrDate);
                    const minutes = Math.round((hoursOfDayOrDate - hours) * 60);
                    hoursOfDayOrDate = new Date(0, 0, 0, hours, minutes);
                }
                return hoursOfDayOrDate.toLocaleTimeString(String.defaults.locale, String.defaults.timeFormat);
        }
    }

    /**
     * Converts a form time string to a number of hours of a day.
     * @param formTimeString The string to parse.
     * @returns An hour of the day (0-24) representing {@link formTimeString}.
     */
    public static fromTime(formTimeString: string) {
        const hours = parseInt(formTimeString.substring(0, 2));
        const minutes = parseInt(formTimeString.substring(3, 5));
        return hours + minutes / 60;
    }

    /**
     * Converts a given duration in milliseconds to a string.
     * @param milliseconds Milliseconds to convert into a duration string.
     * @param maximumPrecision The maximum precision of the duration string.
     * @param minimumPrecision The minimum precision of the duration string.
     * @returns A duration string.
     */
    public static toDurationString(milliseconds: number, maximumPrecision: Precision = 'day', minimumPrecision: Precision = 'second') {
        const precisions = [
            { name: 'week', milliseconds: 1000 * 60 * 60 * 24 * 7 },
            { name: 'day', milliseconds: 1000 * 60 * 60 * 24 },
            { name: 'hour', milliseconds: 1000 * 60 * 60 },
            { name: 'minute', milliseconds: 1000 * 60 },
            { name: 'second', milliseconds: 1000 },
            { name: 'millisecond', milliseconds: 1 }
        ];
        const pieces = [];
        const maximumPrecisionIndex = precisions.findIndex(item => item.name === maximumPrecision);
        const minimumPrecisionIndex = precisions.findIndex(item => item.name === minimumPrecision);
        for (let i = maximumPrecisionIndex, last = minimumPrecisionIndex; i <= last; i++) {
            const item = precisions[i];
            let count = i === last ? Math.round(milliseconds / item.milliseconds) : Math.floor(milliseconds / item.milliseconds);
            milliseconds -= count * item.milliseconds;
            pieces.push(count + ' ' + String.pluralize(item.name, count));
        }
        return pieces.join(', ');
    }

    /**
     * Calculates the [Levenshtein distance]{@link https://en.wikipedia.org/wiki/Levenshtein_distance} between two strings.
     * @param stringA The first string
     * @param stringB The second string
     * @returns The distance between {@link stringA} and {@link stringB}
     */
    public static getLevenshteinDistance(stringA: string, stringB: string) {
        const line = Array(stringB.length + 1).fill(null).map(() => Array(stringA.length + 1).fill(null));
        for (let i = 0; i <= stringA.length; i += 1) {
            line[0][i] = i;
        }
        for (let j = 0; j <= stringB.length; j += 1) {
            line[j][0] = j;
        }
        for (let j = 1; j <= stringB.length; j += 1) {
            for (let i = 1; i <= stringA.length; i += 1) {
                const indicator = stringA[i - 1] === stringB[j - 1] ? 0 : 1;
                line[j][i] = Math.min(line[j][i - 1] + 1, line[j - 1][i] + 1, line[j - 1][i - 1] + indicator);
            }
        }
        return line[stringB.length][stringA.length];
    };

    /**
     * Calculates a normalized similarity factor between two strings. Determines how similar two strings are. Used for fuzzy string checking.
     * @param stringA The first string
     * @param stringB The second string
     * @returns A similarity factor, 1 being identical, 0 being very different.
     */
    public static getSimilarityFactor(stringA: string, stringB: string) {
        const distance = String.getLevenshteinDistance(stringA, stringB);
        const averageLength = (stringA.length + stringB.length) / 2;
        return Math.max(0, 1 - distance / Math.max(1, averageLength));
    }

};