/*
Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
class Product {
constructor(name, price) {
this.name = name;
this.price = price;
}
}

const order = new Order(12345);

const product1 = new Product(""Phone"", 500);
order.addProduct(product1);

const product2 = new Product(""Headphones"", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600
*/

class Order {
    orderNumber;
    products = [];

    constructor(id) {
        this.orderNumber = id;
    }

    addProduct(product) {
        console.log(`Продукт ${product.name} добавлен в заказ`);
        this.products.push(product);
    }

    getTotalPrice() {
        let summa = 0;
        this.products.forEach(element => {
            summa += element.price;
        });
        console.log(`Сумма заказа составила ${summa}`)
        return summa;        
            }
        }
    




class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
    }
const apple = new Product("яблоки", 100)
const meat = new Product("мясо", 200)

const order546 = new Order(546)
order546.addProduct(apple)
order546.addProduct(meat)
order546.getTotalPrice()
