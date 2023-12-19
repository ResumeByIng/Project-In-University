export const ProductService = {
    getProductsData() {
        return [
            {
                code: '2566',
                headlines : '1',
                name: 'CPE5014',
                visit: 'รวิ อุตมธดิล',
            },
            {
                code: '2566',
                headlines : '1',
                name: 'CPE5024',
                visit: 'ขวัญเรือน รัศมี',
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },
};