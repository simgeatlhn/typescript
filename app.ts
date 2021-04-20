import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;


result = _productService.getProducts();  //tüm ürünleri almak için
result = _productService.getById(2);  //tek bir ürün almak için 

//yeni ürün oluşturmak

let p = new Product();
p.id = 2;
p.name = "ıphone 6";
p.price = 4000;
p.category = "phone";

_productService.saveProduct(p);//id kendi eklenir 
//_productService.deleteProduct(result);
result = _productService.getProducts();//tekrar tüm ürünler çağırılır

console.log(result);
