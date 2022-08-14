import { Product } from "./Product";

export class SimpleDataSource {
private products: Array<Product>;

constructor() {
    this.products = new Array<Product>(
        new Product(1,"Samsung S5", "Telefon",1000),
        new Product(2,"IPhone 10", "Telefon",6000),
        new Product(3,"IPad pro", "Tablet",2000),
        new Product(4,"Acer Laptop", "Bilgisayar",9000),
        new Product(5,"Monster Laptop", "Bilgisayar",10000),
        new Product(6,"Samsung note 5", "Telefon",2000),
    )
}
getProducts() : Product[] {
    return this.products;
}
}
//Yazınca constructor içindeki liste çalışır
//
 let p = new SimpleDataSource(); 