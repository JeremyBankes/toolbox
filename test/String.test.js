import String from '../build/String.js';

const UGLY_STRING = 'this -is 1 very &* ugly string';

test('toSlug', () => {
    expect(String.toSlug(UGLY_STRING)).toBe('this-is-1-very-ugly-string');
});

test('toCamel', () => {
    expect(String.toCamel(UGLY_STRING)).toBe('thisIs1VeryUglyString')
});

test('toDurationString', () => {
    expect(String.toDurationString(395038572, 'day', 'hour')).toBe('4 days, 14 hours');
});