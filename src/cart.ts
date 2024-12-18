interface Movie {
    id: number;
    name: string;
    years: number;
    country: string;
    genre: string;
    price: number;
    discount?: number; // ? - скидка может быть не указана
}

export default class Cart {
    //массив типа Movie[], который хранит все добавленные фильмы
    //private - масиив не доступен напрямую извне, доступ к нему только через методы класса Cart
    private items: Movie[] = [];

    //добавляет новый фильм в корзину 
    addMovie(movie: Movie): void {
        this.items.push(movie);
    }

    //метод возвращает количество фильмов в корзине
    getTotalMovies(): number {
        return this.items.length;
    }  

    //считает суммарную стоимость без учета скидки
    getSumMoviesWithoutDiscount(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    //считает суммарную стоимость c учетом скидки
    getSumMoviesWithDiscount(discount: number): number {
        return this.items.reduce((total, item) => {
            if(item.discount) {
                item.price = item.price * (1 - item.discount /100);
            } else {
                item.price = item.price;
            }
            return total + item.price;
        }, 0);
    }

    //метод очищает корзину, удаляя фильмы по id
    clear(id: number): void {
            this.items = this.items.filter(item => item.id !== id);
    }
}