import Data from '../build/Data.js';

const author = {
    name: {
        first: 'Jeremy',
        last: 'Bankes'
    },
    birthDate: new Date(2000, 9, 29),
    email: 'jeremy.bankes@gmail.com',
    favorites: {
        foods: [
            'Sandwich', 'Burrito', 'Pizza'
        ],
        colors: [
            'Dark Gray', 'Cyan', 'White'
        ],
        movies: [
            {
                name: 'Gladiator',
                main: 'Maximus Meridius'
            },
            {
                name: 'Spirited Away',
                main: 'Chihiro Ogino'
            }
        ]
    }
};

test('Data.has simple does exist', () => {
    expect(Data.has(author, 'name.first')).toBe(true);
});

test('Data.has array does exist', () => {
    expect(Data.has(author, 'favorites.movies.0.name')).toBe(true);
});

test('Data.has simple does not exist', () => {
    expect(Data.has(author, 'name.middle')).toBe(false);
});

test('Data.get simple does exist', () => {
    expect(Data.get(author, 'name.first')).toBe('Jeremy');
});

test('Data.get simple does not exist', () => {
    expect(Data.get(author, 'name.middle')).toBe(null);
});

test('Data.get array does exist', () => {
    expect(Data.get(author, 'favorites.colors.1')).toBe('Cyan');
});

test('Data.get object in array does exist', () => {
    expect(Data.get(author, 'favorites.movies.1.main')).toBe('Chihiro Ogino');
});

test('Data.get empty path', () => {
    expect(Data.get(author, '')).toBe(null);
});

test('Data.get fallback', () => {
    expect(Data.get(author, '', 'quack')).toBe('quack');
});

test('Data.set simple', () => {
    const object = {};
    Data.set(object, 'name.first', 'Jeremy');
    expect(object.name.first).toBe('Jeremy');
});

test('Data.set array', () => {
    const object = {};
    Data.set(object, 'name.nicknames.0.value', 'Bullfrog');
    expect(object.name.nicknames[0].value).toBe('Bullfrog');
    expect(Array.isArray(object.name.nicknames)).toBe(true);
});

test('Data.set empty path', () => {
    const object = {};
    Data.set(object, '', 'Empty');
    expect(object).toMatchObject({});
});

test('Data.remove simple', () => {
    Data.remove(author, 'favorites.colors.2');
    expect(author).not.toHaveProperty('favorites.colors.2');
});

test('Data.remove path does not exist', () => {
    Data.remove(author, 'random.path.that.does.not.exist');
});