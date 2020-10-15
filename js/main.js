class ProductList {

    constructor(container = '.b-products') {
        this.container = container;
        this.goods = [];
        this._allProducts = [];

        this._fetchGoods();
        this.render();
    }

    getTotalCost() {
        const sumPrices = function(currentValue, nextValue) {
            return currentValue + nextValue
        };
        let priceArr = this.goods.map(function(product) {
            return product.price;
        });
        return priceArr.reduce(sumPrices);
    }

    _fetchGoods() {
        this.goods = [
            {
                id: 1,
                title: 'Notebook',
                price: 20000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 1500
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 5000
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 4500
            },
    ];
    }


    render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObject = new ProductItem(product);

            this._allProducts.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
        }
    }
}

class ProductItem {
    constructor(product, img = "img/product.jpg") {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    getGoodHTML() {
        return `<div class="b-product-item">
            <h3 class="b-product-item__name">${this.title}</h3>
            <img src="${this.img}" alt="" class="b-product-item__img">
            <p class="b-product-item__price">${this.price} р.</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
    }
}

class BasketList {
    constructor(container) {
        this.container = container;
    }

    clearBasket() {
        return ("Hello");
    }
    render() {
        return;
    }


}

class BasketItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getBasketItem() {

    }

    plusQuantity() {

    }

    minusQuantity() {

    }

    removeProduct() {

    }
}

const list = new ProductList();

// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
