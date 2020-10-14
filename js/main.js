const products = [
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

const renderProduct = (name, price, img = "img/product.jpg") => {
    console.log(img);
    return `<div class="b-product-item">
            <h3 class="b-product-item__name">${name}</h3>
            <img src="${img}" alt="" class="b-product-item__img">
            <p class="b-product-item__price">${price} р.</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  document.querySelector('.b-products').insertAdjacentHTML('beforeend', list.map(item => renderProduct
                                                                                 (item.title, item.price)).join(''));
};

renderProducts(products);
