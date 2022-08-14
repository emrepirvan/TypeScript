import { Product } from "./Product";
import { ProductService } from "./ProductService";


let _productService =  new ProductService();

let result;

let result1 = _productService.getProducts();
result = _productService.getById(4);

let p = new Product();

p.name = "Iphone 6";
p.price = 4000;
p.category= "Telefon";

_productService.saveProduct(p);

_productService.deleteProduct(result);

console.log(result1);