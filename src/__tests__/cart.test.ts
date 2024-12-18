import Cart from '../cart';

test('checking Cart method getSumMoviesWithoutDiscount', () => {
    let cart = new Cart();
    let filmOne = {
        id: 1,
        name: 'Мстители', 
        years: 2012, 
        country: 'США', 
        genre: 'фантастика, боевик, фэнтези, приключения', 
        price: 500,
        discount: 10,
    };
    let filmTwo = {
        id: 2,
        name: 'Человек-паук', 
        years: 2021, 
        country: 'США', 
        genre: 'фантастика', 
        price: 800,
        discount: 20,
    };
    cart.addMovie(filmOne);
    cart.addMovie(filmTwo);
    expect(cart.getSumMoviesWithoutDiscount()).toBe(1300);
});

test('checking Cart method getSumMoviesWithDiscount with discount', () => {
    let cart = new Cart();
    let filmOne = {
        id: 1,
        name: 'Мстители', 
        years: 2012, 
        country: 'США', 
        genre: 'фантастика, боевик, фэнтези, приключения', 
        price: 500,
        discount: 10,
    };
    let filmTwo = {
        id: 2,
        name: 'Человек-паук', 
        years: 2021, 
        country: 'США', 
        genre: 'фантастика', 
        price: 800,
        discount: 20,
    };
    cart.addMovie(filmOne);
    cart.addMovie(filmTwo);
    expect(cart.getSumMoviesWithDiscount(10)).toBe(1090);
});

test('checking Cart method getSumMoviesWithDiscount without discount', () => {
    let cart = new Cart();
    let filmOne = {
        id: 1,
        name: 'Мстители', 
        years: 2012, 
        country: 'США', 
        genre: 'фантастика, боевик, фэнтези, приключения', 
        price: 500,
    };
    let filmTwo = {
        id: 2,
        name: 'Человек-паук', 
        years: 2021, 
        country: 'США', 
        genre: 'фантастика', 
        price: 800,
    };
    cart.addMovie(filmOne);
    cart.addMovie(filmTwo);
    expect(cart.getSumMoviesWithDiscount(10)).toBe(1300);
});

test('checking Cart method clear', () => {
    let cart = new Cart();
    let filmOne = {
        id: 1,
        name: 'Мстители', 
        years: 2012, 
        country: 'США', 
        genre: 'фантастика, боевик, фэнтези, приключения', 
        price: 500,
        discount: 10,
    };
    let filmTwo = {
        id: 2,
        name: 'Человек-паук', 
        years: 2021, 
        country: 'США', 
        genre: 'фантастика', 
        price: 800,
        discount: 20,
    };
    cart.addMovie(filmOne);
    cart.addMovie(filmTwo);
    cart.clear(1);
    expect(cart.getTotalMovies()).toBe(1);
    cart.clear(2);
    expect(cart.getTotalMovies()).toBe(0);
});