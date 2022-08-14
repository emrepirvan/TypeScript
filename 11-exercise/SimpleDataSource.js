"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Telefon", 1000), new Product_1.Product(2, "IPhone 10", "Telefon", 6000), new Product_1.Product(3, "IPad pro", "Tablet", 2000), new Product_1.Product(4, "Acer Laptop", "Bilgisayar", 9000), new Product_1.Product(5, "Monster Laptop", "Bilgisayar", 10000), new Product_1.Product(6, "Samsung note 5", "Telefon", 2000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
//Yazınca constructor içindeki liste çalışır
//
var p = new SimpleDataSource();
