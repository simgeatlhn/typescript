import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "samsung s8", "phone", 4000),
            new Product(2, "samsung s7", "phone", 3000),
            new Product(3, "samsung s6", "phone", 2000),
            new Product(4, "samsung s5", "phone", 1000)
        );
    }

    getProducts(): Product[] {
        return this.products;  //public yapmak için
    }
}

