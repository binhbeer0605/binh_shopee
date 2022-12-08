
// khai báo định dạng tiền tệ VND
const formatter = new Intl.NumberFormat('vn-VN', {
    style: 'currency',
    currency: 'VND'
});

var app = {
    products: [
        {
            'name': 'Bàn phím cơ gaming Leaven K550 Redswitch Đen - Trắng',
            'imgSrc': 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS967fbXnG8ebiquSMbhvMxgcrWN1taJSx7Pnfz8PnFl2_U5KGuhqLBL7yBs3HjPdg2EebkNL3OlmI&usqp=CAc',
            'price': 2300000,
            'sold': 88,
            'brand': 'Whoo',
            'origin': 'Japan',
            'saleOff': 0,
        },
        {
            'name': 'Chuột gaming HAVIT MS1003',
            'imgSrc': 'https://xgear.net/wp-content/uploads/2022/01/MS1003-1.jpeg',
            'price': 240000,
            'sold': 16500,
            'brand': 'sidotech',
            'origin': 'Japan',
            'saleOff': 42,
        },
        {
            'name': 'Bàn phím cơ gaming Leaven K550 Redswitch Đen - Trắng',
            'imgSrc': 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS967fbXnG8ebiquSMbhvMxgcrWN1taJSx7Pnfz8PnFl2_U5KGuhqLBL7yBs3HjPdg2EebkNL3OlmI&usqp=CAc',
            'price': 2300000,
            'sold': 88,
            'brand': 'Whoo',
            'origin': 'Japan',
            'saleOff': 45,
        },
        {
            'name': 'Chuột gaming HAVIT MS1003',
            'imgSrc': 'https://xgear.net/wp-content/uploads/2022/01/MS1003-1.jpeg',
            'price': 240000,
            'sold': 16500,
            'brand': 'sidotech',
            'origin': 'Japan',
            'saleOff': 42,
        },
        {
            'name': 'Bàn phím cơ gaming Leaven K550 Redswitch Đen - Trắng',
            'imgSrc': 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS967fbXnG8ebiquSMbhvMxgcrWN1taJSx7Pnfz8PnFl2_U5KGuhqLBL7yBs3HjPdg2EebkNL3OlmI&usqp=CAc',
            'price': 2300000,
            'sold': 88,
            'brand': 'Whoo',
            'origin': 'Japan',
            'saleOff': 45,
        }
    ],
    start: function () {
        this.renderProduct();
    },
    // Hiển thị sản phẩm ra màn hình
    renderProduct: function () {
        var boxProduct = document.querySelector('#render-products');
        var _this = this;
        var show = this.products.map(function (product) {
            return `
                <div class="col l-2-4 m-4 c-12">
                    <!-- product item -->
                    <a href="" class="home-product-item">
                        <div style="background-image: url(${product.imgSrc});" class="home-product-item__img"></div>
                        <h5 class="home-product-item__name">${product.name}</h5>

                        <div class="home-product-item__price">
                            <span class="home-product-item__price-old">${_this.renderPrice(product.saleOff, product.price)}</span>
                            <span class="home-product-item__price-current">${formatter.format(product.price)}</span>
                        </div>

                        <div class="home-product-item__action">
                            <!-- home-product-item__like--liked -->
                            <span class="home-product-item__like home-product-item__like--liked">
                                <i class="home-product-item__icon-empty far fa-heart"></i>
                                <i class="home-product-item__icon fas fa-heart"></i>
                            </span>

                            <span class="home-product-item__rate">
                                <i class="home-product-item__rate--gold fas fa-star"></i>
                                <i class="home-product-item__rate--gold fas fa-star"></i>
                                <i class="home-product-item__rate--gold fas fa-star"></i>
                                <i class="home-product-item__rate--gold fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span>

                            <span class="home-product-item__sold">${product.sold} đã bán</span>
                        </div>

                        <div class="home-product-item__origin">
                            <span class="home-product-item__brand">${product.brand}</span>
                            <span class="home-product-item__origin-name">${product.origin}</span>
                        </div>

                        <div class="home-product-item__favourite">
                            <i class="fas fa-check"></i>
                            <span>Yêu thích</span>
                        </div>

                        <div class="home-product-item__sale-off">
                            <span class="home-product-item__sale-off-percent">${product.saleOff}%</span>
                            <span class="home-product-item__sale-off-label">Giảm</span>
                        </div>
                    </a>
                </div>
            `
        });
        boxProduct.innerHTML = show.join('')
    },
    // Hiển thị giá mới nếu có sale off, không có sale off hiển thị giá hiện tại
    renderPrice: function (sale, price) {
        if(sale === 0) {
            return '';
        }else{
            return formatter.format(price - (price * (sale/100)))
        }
    },
    totalProducts: function () {
        return this.products.lengtht;
    }

}

app.start();