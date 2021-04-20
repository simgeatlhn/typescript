"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "samsung s8", "phone", 4000), new Product_1.Product(2, "samsung s7", "phone", 3000), new Product_1.Product(3, "samsung s6", "phone", 2000), new Product_1.Product(4, "samsung s5", "phone", 1000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products; //public yapmak için
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
